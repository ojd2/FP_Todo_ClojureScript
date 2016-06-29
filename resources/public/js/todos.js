goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.array', 'goog.object', 'goog.string.StringBuffer']);
goog.addDependency("../clojure/browser/event.js", ['clojure.browser.event'], ['cljs.core', 'goog.events.EventType', 'goog.events.EventTarget', 'goog.events']);
goog.addDependency("../clojure/browser/dom.js", ['clojure.browser.dom'], ['cljs.core', 'goog.object', 'goog.dom']);
goog.addDependency("../clojure/browser/net.js", ['clojure.browser.net'], ['goog.net.xpc.CrossPageChannel', 'clojure.browser.event', 'goog.net.xpc.CfgFields', 'cljs.core', 'goog.net.EventType', 'goog.json', 'goog.net.XhrIo']);
goog.addDependency("../clojure/browser/repl.js", ['clojure.browser.repl'], ['clojure.browser.event', 'clojure.browser.net', 'cljs.core']);
goog.addDependency("../todo_cljs/todos.js", ['todo_cljs.todos'], ['clojure.browser.event', 'cljs.core', 'clojure.browser.dom', 'clojure.browser.repl', 'goog.events']);