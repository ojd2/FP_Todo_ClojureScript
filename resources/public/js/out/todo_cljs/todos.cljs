;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;************************************** PREREQUISITES  ****************************************;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Set up Clojure name space (ns) and require modules to be extended throughout the application.
(ns todo_cljs.todos
  (:require [clojure.browser.repl :as repl] ;; Used for internal compiler feedback.
            [clojure.browser.dom  :as dom] ;; Used for selecting DOM elements.
            [clojure.browser.event :as event] ;; Used for triggering event handlers.
            [goog.events :as events])) ;; Used for DOM mapping and targeting.

;; Enable console logging in more detail for use in the console.
(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;**************************************** THE MODEL  ******************************************;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Define a variable called 'todo-list' that stores an 'atom'.
;; An Atom provides a way to manage a shared, synchronous, independent state.
;; They are a reference type and can be allocated using @ -> e.g -> '@todo-list'.
(def todo-list (atom []))

;; Shortcut for dom/get-element.
(defn by-id [id] (dom/get-element id))

;; Shortcut for dom/element.
(defn elemt [tag params] (dom/element tag params))

;; Define a method to remove a todo by it's 'id' number.
(defn remove-todo-by-id [id]
  ;; The 'reset!' method is called upon our atom.
  ;; The reset! method sets the value of atom to newval without
  ;; regard for the current value. Therefore it RETURN newval.
  (reset! todo-list
          ;; A simple filter method is called to remove the selected 'id'.
          (vec (filter #(not= (% "id") id) @todo-list))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;******************************** CONTROLLERS, UI & HANDLERS **********************************;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; DECLARE a unique state to REFRESH the atom.
(declare refresh-data)
;; Set up a handler that takes an event argument.
;; This method extends the 'remove-todo-by-id' method.
;; The event is triggered, the id is captured and the method 'remove-todo-by-id' is called.
(defn delete-click-handler [event]
  ;; Capture id of the DOM "data-todo-id" value. We can use the '-' syntax to use pure JS.
  (let [id (.getAttribute (.-target event) "data-todo-id")]
    ;; Call the remove-todo-by-id method and passing the captured id value.
    (remove-todo-by-id id)
    ;; Finally, refresh the atom and state view.
    (refresh-data)))

;; DEFINE method to IDENTIFY whether checkbox is CHECKED.
(defn checkbox-change-handler [event]
  ;; Set up handler event. We can use the '-' syntax to use pure JS.
  (let [checkbox (.-target event)
        ;; Get the 'id' value of the todo item.
        id       (.getAttribute checkbox "data-todo-id")
        ;; Calculate if todo item is checked.
        checked  (.-checked checkbox)]
    ;; Then mark the todo item as chcked and completed.
    ;; KEY: update-attr -> status of the checked item.
    (update-attr id "completed" checked)
    ;; REFRESH the atom state.
    (refresh-data)))

;; DEFINE method to CAPTURE the INPUT VALUE from the main input form in the DOM.
(defn input-todo-key-handler [event]
  ;; TRIGGER event handler on the input variable.
  (let [input (.-target event)
        ;; Text = input.value() JS '-value input' equivalent.
        ;; The '.trim' method is also applied.
        todo  (.trim (.-value input))
        ;; The 'id' is converted to STRING.
        id    (apply str (.-id input))]
    ;; Returns a sequence (seq) on the collection. If the collection is
    ;; empty, returns nil. Therefore, (seq nil) returns nil as well.
    ;; Sequence also works on Strings, native Java arrays (of reference types) and any objects
    ;; that implement Iterable.
    (if (vals todo)
      (if (= 13 (.-keyCode event))
        (do
          (update-attr id "title" todo)
          (refresh-data)))
      )))

;; DEFINE a method that updates the attribute of the todo item in the todo-list atom.
;; Takes three args 'id' 'attr' 'val' and updates whether the todo item has been checked.
(defn update-attr [id attr val]
  ;; Let 'updated' delegate for all todo items in the todo-list - their status.
  (let [updated
        ;; Inside the vector, a mapping using conj[oin].
        ;; This returns a new collection with the xs 'added'.
        ;; What is more, (conj nil item) returns (item).  The 'addition' may
        ;; happen at different 'places' depending on the concrete type.
        (vec (map #(if (= (% "id") id) (conj % {attr val}) %) @todo-list))]
;; else reset! atom and updated, reverting to default.
(reset! todo-list updated)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;***************************************** VIEW ***********************************************;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; DEFINE a method that simply appends HTML to DOM.
(defn append-todos []
  ;; We 'set!' our atom and then locate the DOM element 'todo-list'
  ;; within the index.html file.
  (set! (.-innerHTML (by-id "todo-list")) "")
  ;; Is this copying the `input-todo' <input> element already present
  ;; in the index.html file?
  (dom/set-value (by-id "todo-input") "")
  (dorun ;; Here we materialize a lazy list returned by map below:
   (map  ;; Returns the map with the vals mapped to the keys.
    (fn [todo]
      (let [
        id          (todo "id")
        li          (elemt "li" {"id" "todo-item"})
        checkbox    (elemt "input" {"class" "toggle" "data-todo-id" id
                                   "type" "checkbox"})
        label       (elemt "label" {"data-todo-id" id})
        delete-link (elemt "button" {"class" "destroy" "data-todo-id" id})
        div-display (elemt "div" {"class" "view" "data-todo-id" id})
        input-todo  (elemt "span" {"id" (str "input_" id) "class" "edit"})]

        (dom/set-text label (todo "title"))
        (dom/set-value input-todo (todo "title"))

        (event/listen checkbox "change" checkbox-change-handler)
        (event/listen delete-link "click" delete-click-handler)

        (dom/append div-display checkbox label delete-link)
        (dom/append li div-display input-todo)
        ;; Small conditional method to express whether todo item should
        ;; be delegated completed or not.
        (if (todo "completed")
          (do
            (dom/set-properties li {"class" "complete"})
            (dom/set-properties checkbox {"checked" true})))

        (dom/append (by-id "todo-list") li)))
    @todo-list)))

;; DEFINE method to clear a checked todo item in the todo-list atom.
(defn clear-click-handler []
  ;; A simple reset! is called upon the todo-list atom but leaves any
  ;; checked items that are not set to "completed". i.e -> todo items not checked.
  (reset! todo-list (filter #(not (% "completed")) @todo-list))
  ;; Callback refresh-data.
  (refresh-data))

;; DEFINE method that calls the append-todos method above.
;; The method simply appends HTML DOM elements along with the todo item value.
(defn refresh-data []
  (append-todos))

;; DEFINE a method to generate a uuid (random) integers.
;; A Similliar approach is used in actual Todo MVC.
;; The method after randomly generating integers, then will RETURN
;; a hexadecimal (0-16) value and a random alphabet letter.
;; The argument 'n' is used for type checking.
;; The returned value will be used as the todo item uuid and converted
;; to a STRING. The STRING takes four arguments and therefore a
;; returned value will look like -> #uuid "af44".
(defn gen-uuid []
  (letfn [(n [] (.toString (rand-int 16) 16))]
    (let [rhex (.toString (bit-or 0x8 (bit-and 0x3 (rand-int 16))) 16)]
        (str (n) (n) (n) (n)))))

;; DEFINE a method to simply add a todo item to the todo-list atom state.
(defn add-todo [todo]
  ;; First pass an argument to contain a 'todo'. This acts as our handler.
  ;; Then begin a sequence or value check on the todo by trimming.
  ;; The '.trim' method removes whitespace from both ends of string.
  ;; As previously mentioned, the'seq' method represents a sequential view
  ;; of a collection or collection-like entity (computation result).
  ;; In this case, the [todo] java array containing strings.
  (let [trimmed (.trim todo)]
    (if (seq trimmed)
      (do
        ;; Atomically swaps the value of atom to be:
        ;; (apply f current-value-of-atom args). Note that f may be called
        ;; multiple times, and thus should be free of side effects.  Returns
        ;; the value that was swapped in.
        (swap! todo-list conj {"id" (gen-uuid) "title" trimmed "completed" false})
        ;; Finally, we REFRESH the data -> this is just our method to update
        ;; the internal state behaviour after any notifcations.
        (refresh-data)))))

;; DEFINE method that returns add-todo afer hitting the return key code.
(defn enterkey-handler [event]
  (if (= 13 (.-keyCode event))
    ;; We call add-todo and pass the todo-input value as normal.
    (add-todo (.-value (by-id "todo-input")))))

;; DEFINE method to add a todo item.
(defn add-todo-handler [event]
    ;; After event is triggered, pass the value of the todo-input item.
    (add-todo (.-value (by-id "todo-input"))))

;; DEFINE method to check all todo items in the todo-list atom.
(defn complete-all-handler [event]
  ;; Let conditional to trigger function completed -> mapping all todos -> "completed".
  (let [todos (.-target event)
        completed (map #(assoc % "completed" todos) @todo-list)]
    (reset! todo-list)
    ;; Another callback to refresh the data afterwards.
    (refresh-data)))

(defn remove-all-handler [event]
    (reset! todo-list)
    (refresh-data))

;; DEFINE a method that appends our event listners onto our HTML elements.
;; Also include handler activity such as "click, keypress..." etc.
(defn add-event-listeners []
  (event/listen (by-id "todo-input") "keypress" enterkey-handler)
  (event/listen (by-id "add-todo") "click" add-todo-handler)
  (event/listen (by-id "remove-todo") "click" clear-click-handler)
  (event/listen (by-id "complete-all") "click" complete-all-handler)
  (event/listen (by-id "remove-all") "click" remove-all-handler)
)

;; DEFINE a method that is to be called when the page loads.
;; The method will call both refresh-data method & add-event-listners.
(defn window-load-handler []
  (refresh-data)
  (add-event-listeners))

;; Finally, launch window-load-handler when window loads
;; -- not sure why (ev/listen js/window "load" fn) does not work
(events/listen js/window "load" window-load-handler)
