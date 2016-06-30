;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;************************************** PREREQUISITES  ****************************************;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Set up Clojure name space (ns) and require modules to be extended
;; throughout the application.
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

;; Define variable for the return key so users can also add todo.
;; Stores the keycode == 13.
(def ENTER 13)
;; Define a variable called 'todo-list' that stores an 'atom'.
;; An Atom provides a way to manage a shared, synchronous, independent state.
;; They are a reference type and can be allocated using @ -> e.g -> '@todo-list'.
(def todo-list (atom []))

;; Shortcut for dom/get-element.
(defn by-id [id] (dom/get-element id))

;; Shortcut for dom/element.
(defn elemt [tag params] (dom/element tag params))

;; Define a method for stats which displays how many completed tasks are left.
(defn stats []
  ;; 'Total' stores 'count' method of our atom.
  (let [total     (count @todo-list)
        ;; The 'count' method is called again on the atom.
        ;; Next, 'filter' is executed and counts only 'completed'.
        completed (count (filter #(= true (% "completed")) @todo-list))
        ;; Then a simple subtraction that -> total - completed.
        left      (- total completed)]
    ;; Finally, point our returned values to the associated variables.
    {:total total :completed completed :left left}))

;; Define a method to remove a todo by it's 'id' number.
(defn remove-todo-by-id [id]
;; The 'reset!' method is called upon our atom.
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

;; DEFINE a method to IDENTIFY whether checkbox is CHECKED.
(defn checkbox-change-handler [event]
  ;; Set up handler event. We can use the '-' syntax to use pure JS.
  (let [checkbox (.-target event)
        ;; Get the 'id' value of the todo item.
        id       (.getAttribute checkbox "data-todo-id")
        ;; Calculate if todo item is checked.
        checked  (.-checked checkbox)]
    ;; Then mark the todo item as chcked and completed.
    (id "completed" checked)
    ;; REFRESH the atom state.
    (refresh-data)))

(defn input-todo-key-handler [event]
  (let [input (.-target event)
        text  (.trim (.-value input))
        id    (apply str (drop 6 (.-id input)))]
    (if (seq text)
      (if (= ENTER (.-keyCode event))
        (do
          (id)
          (refresh-data)))
      (do
        (remove-todo-by-id id)
        (refresh-data)))))


(defn redraw-todos-ui []
  (set! (.-innerHTML (by-id "todo-list")) "")
  ;; (dom/remove-children "todo-list")) ???
  (dom/set-value (by-id "todo-input") "")
  (dorun ;; materialize lazy list returned by map below
   (map
    (fn [todo]
      (let [
        id          (todo "id")
        li          (elemt "li" {"id" (str "li_" id)})
        checkbox    (elemt "input" {"class" "toggle" "data-todo-id" id
                                   "type" "checkbox"})
        label       (elemt "label" {"data-todo-id" id})
        delete-link (elemt "button" {"class" "destroy" "data-todo-id" id})
        div-display (elemt "div" {"class" "view" "data-todo-id" id})
        input-todo  (elemt "input" {"id" (str "input_" id) "class" "edit"})]

        (dom/set-text label (todo "title"))
        (dom/set-value input-todo (todo "title"))

        (event/listen checkbox "change" checkbox-change-handler)
        (event/listen delete-link "click" delete-click-handler)
        (event/listen input-todo "keypress" input-todo-key-handler)

        (dom/append div-display checkbox label delete-link)
        (dom/append li div-display input-todo)

        (if (todo "completed")
          (do
            (dom/set-properties li {"class" "complete"})
            (dom/set-properties checkbox {"checked" true})))

        (dom/append (by-id "todo-list") li)))
    @todo-list)))

(defn draw-todo-count []
  (let [stat (stats)
        text (str " " (if (= 1 (:left stat)) "item" "items") " left")
        number (dom/element "strong" (str (:left stat)))
        remaining (dom/element "span" {"id" "todo-count"})
        footer (by-id "footer")]
    (dom/append remaining number text)
    (dom/append footer remaining)))

(defn clear-click-handler []
  (reset! todo-list (filter #(not (% "completed")) @todo-list))
  (refresh-data))

(defn draw-todo-clear []
  (let [footer (by-id "footer")
        message (str "Clear completed (" (:completed (stats)) ")")
        button (dom/element "button" {"id" "clear-completed"} message)]
    (ev/listen button "click" clear-click-handler)
    (dom/append footer button)))

(defn redraw-status-ui []
  (let [footer  (by-id "footer")
        display (if (empty? @todo-list) "none" "block")
        stat (stats)]
    (dom/remove-children "footer")
    (dom/set-properties footer {"style" (str "display:" display)})
    (if (not= 0 (:completed stat)) (draw-todo-clear))
    (if (not= 0 (:total stat)) (draw-todo-count))))

(defn change-toggle-all-checkbox-state []
  (let [toggle-all  (by-id "toggle-all")
        all-checked (every? #(= true (% "completed")) @todo-list)]
    (set! (.-checked toggle-all) all-checked)))

(defn refresh-data []
  (redraw-todos-ui)
  (redraw-status-ui)
  (change-toggle-all-checkbox-state))

;; This get-uuid fn is almost equiv to the original
(defn get-uuid []
  (apply
   str
   (map
    (fn [x]
      (if (= x \0)
        (.toString (bit-or (* 16 (.random js/Math)) 0) 16)
        x))
    "00000000-0000-4000-0000-000000000000")))

(defn add-todo [text]
  (let [tt (.trim text)]
    (if (seq tt)
      (do
        (swap! todo-list conj {"id" (get-uuid) "title" tt "completed" false})
        (refresh-data)))))

(defn todo-input-handler [event]
  (if (= ENTER (.-keyCode event))
    (add-todo (.-value (by-id "todo-input")))))

(defn add-todo-input-handler [event]
    (add-todo (.-value (by-id "todo-input"))))

;;(defn remove-todo-handler [event]
;; (delete-click-handler id)(refresh-data))

(defn toggle-all-handler [event]
  (let [checked (.-checked (.-target event))
        toggled (map #(assoc % "completed" checked) @todo-list)]
    (reset! todo-list toggled)
    (refresh-data)))

(defn add-event-listeners []
  (event/listen (by-id "todo-input") "keypress" todo-input-handler)
  (event/listen (by-id "add-todo") "click" add-todo-input-handler)
  (event/listen (by-id "remove-todo") "click" clear-click-handler)
  (event/listen (by-id "toggle-all") "change" toggle-all-handler)
)

(defn window-load-handler []
  (refresh-data)
  (add-event-listeners))

;; Launch window-load-handler when window loads
;; -- not sure why (ev/listen js/window "load" fn) does not work
(events/listen js/window "load" window-load-handler)

;; To connect a browser-attached repl:
;; (repl/connect "http://localhost:9000/repl")

;; Debugging:
;; (in-ns 'todo-cljs.todos)
;; (add-todo "one")
;; (add-todo "two")
;; (add-todo "three")
;; (map #(js/alert %) @todo-list)
