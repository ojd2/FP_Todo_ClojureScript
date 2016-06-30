// Compiled by ClojureScript 0.0-2173
goog.provide('todo_cljs.todos');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('clojure.browser.event');
goog.require('clojure.browser.event');
goog.require('clojure.browser.dom');
goog.require('clojure.browser.dom');
goog.require('clojure.browser.repl');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_.call(null);
todo_cljs.todos.todo_list = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
todo_cljs.todos.by_id = (function by_id(id){return clojure.browser.dom.get_element.call(null,id);
});
todo_cljs.todos.elemt = (function elemt(tag,params){return clojure.browser.dom.element.call(null,tag,params);
});
todo_cljs.todos.remove_todo_by_id = (function remove_todo_by_id(id){return cljs.core.reset_BANG_.call(null,todo_cljs.todos.todo_list,cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__4830_SHARP_){return cljs.core.not_EQ_.call(null,p1__4830_SHARP_.call(null,"id"),id);
}),cljs.core.deref.call(null,todo_cljs.todos.todo_list))));
});
todo_cljs.todos.delete_click_handler = (function delete_click_handler(event){var id = event.target.getAttribute("data-todo-id");todo_cljs.todos.remove_todo_by_id.call(null,id);
return todo_cljs.todos.refresh_data.call(null);
});
todo_cljs.todos.checkbox_change_handler = (function checkbox_change_handler(event){var checkbox = event.target;var id = checkbox.getAttribute("data-todo-id");var checked = checkbox.checked;todo_cljs.todos.update_attr.call(null,id,"completed",checked);
return todo_cljs.todos.refresh_data.call(null);
});
todo_cljs.todos.input_todo_key_handler = (function input_todo_key_handler(event){var input = event.target;var text = input.value.trim();var id = cljs.core.apply.call(null,cljs.core.str,input.id);if(cljs.core.truth_(cljs.core.vals.call(null,text)))
{if(cljs.core._EQ_.call(null,13,event.keyCode))
{todo_cljs.todos.update_attr.call(null,id,"title",text);
return todo_cljs.todos.refresh_data.call(null);
} else
{return null;
}
} else
{return null;
}
});
todo_cljs.todos.update_attr = (function update_attr(id,attr,val){var updated = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__4831_SHARP_){if(cljs.core._EQ_.call(null,p1__4831_SHARP_.call(null,"id"),id))
{return cljs.core.conj.call(null,p1__4831_SHARP_,new cljs.core.PersistentArrayMap.fromArray([attr,val], true, false));
} else
{return p1__4831_SHARP_;
}
}),cljs.core.deref.call(null,todo_cljs.todos.todo_list)));return cljs.core.reset_BANG_.call(null,todo_cljs.todos.todo_list,updated);
});
todo_cljs.todos.redraw_todos_ui = (function redraw_todos_ui(){todo_cljs.todos.by_id.call(null,"todo-list").innerHTML = "";
clojure.browser.dom.set_value.call(null,todo_cljs.todos.by_id.call(null,"todo-input"),"");
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (todo){var id = todo.call(null,"id");var li = todo_cljs.todos.elemt.call(null,"li",new cljs.core.PersistentArrayMap(null, 1, ["id",[cljs.core.str("li_"),cljs.core.str(id)].join('')], null));var checkbox = todo_cljs.todos.elemt.call(null,"input",new cljs.core.PersistentArrayMap(null, 3, ["class","toggle","data-todo-id",id,"type","checkbox"], null));var label = todo_cljs.todos.elemt.call(null,"label",new cljs.core.PersistentArrayMap(null, 1, ["data-todo-id",id], null));var delete_link = todo_cljs.todos.elemt.call(null,"button",new cljs.core.PersistentArrayMap(null, 2, ["class","destroy","data-todo-id",id], null));var div_display = todo_cljs.todos.elemt.call(null,"div",new cljs.core.PersistentArrayMap(null, 2, ["class","view","data-todo-id",id], null));var input_todo = todo_cljs.todos.elemt.call(null,"input",new cljs.core.PersistentArrayMap(null, 2, ["id",[cljs.core.str("input_"),cljs.core.str(id)].join(''),"class","edit"], null));clojure.browser.dom.set_text.call(null,label,todo.call(null,"title"));
clojure.browser.dom.set_value.call(null,input_todo,todo.call(null,"title"));
clojure.browser.event.listen.call(null,checkbox,"change",todo_cljs.todos.checkbox_change_handler);
clojure.browser.event.listen.call(null,delete_link,"click",todo_cljs.todos.delete_click_handler);
clojure.browser.dom.append.call(null,div_display,checkbox,label,delete_link);
clojure.browser.dom.append.call(null,li,div_display,input_todo);
if(cljs.core.truth_(todo.call(null,"completed")))
{clojure.browser.dom.set_properties.call(null,li,new cljs.core.PersistentArrayMap(null, 1, ["class","complete"], null));
clojure.browser.dom.set_properties.call(null,checkbox,new cljs.core.PersistentArrayMap(null, 1, ["checked",true], null));
} else
{}
return clojure.browser.dom.append.call(null,todo_cljs.todos.by_id.call(null,"todo-list"),li);
}),cljs.core.deref.call(null,todo_cljs.todos.todo_list)));
});
todo_cljs.todos.clear_click_handler = (function clear_click_handler(){cljs.core.reset_BANG_.call(null,todo_cljs.todos.todo_list,cljs.core.filter.call(null,(function (p1__4832_SHARP_){return cljs.core.not.call(null,p1__4832_SHARP_.call(null,"completed"));
}),cljs.core.deref.call(null,todo_cljs.todos.todo_list)));
return todo_cljs.todos.refresh_data.call(null);
});
todo_cljs.todos.change_toggle_all_checkbox_state = (function change_toggle_all_checkbox_state(){var toggle_all = todo_cljs.todos.by_id.call(null,"toggle-all");var all_checked = cljs.core.every_QMARK_.call(null,((function (toggle_all){
return (function (p1__4833_SHARP_){return cljs.core._EQ_.call(null,true,p1__4833_SHARP_.call(null,"completed"));
});})(toggle_all))
,cljs.core.deref.call(null,todo_cljs.todos.todo_list));return toggle_all.checked = all_checked;
});
todo_cljs.todos.refresh_data = (function refresh_data(){todo_cljs.todos.redraw_todos_ui.call(null);
return todo_cljs.todos.change_toggle_all_checkbox_state.call(null);
});
todo_cljs.todos.get_uuid = (function get_uuid(){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (x){if(cljs.core._EQ_.call(null,x,"0"))
{return ((16 * Math.random()) | 0).toString(16);
} else
{return x;
}
}),"00000000-0000-4000-0000-000000000000"));
});
todo_cljs.todos.add_todo = (function add_todo(text){var tt = text.trim();if(cljs.core.seq.call(null,tt))
{cljs.core.swap_BANG_.call(null,todo_cljs.todos.todo_list,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, ["id",todo_cljs.todos.get_uuid.call(null),"title",tt,"completed",false], null));
return todo_cljs.todos.refresh_data.call(null);
} else
{return null;
}
});
todo_cljs.todos.todo_input_handler = (function todo_input_handler(event){if(cljs.core._EQ_.call(null,13,event.keyCode))
{return todo_cljs.todos.add_todo.call(null,todo_cljs.todos.by_id.call(null,"todo-input").value);
} else
{return null;
}
});
todo_cljs.todos.add_todo_input_handler = (function add_todo_input_handler(event){return todo_cljs.todos.add_todo.call(null,todo_cljs.todos.by_id.call(null,"todo-input").value);
});
todo_cljs.todos.toggle_all_handler = (function toggle_all_handler(event){var checked = event.target.checked;var toggled = cljs.core.map.call(null,((function (checked){
return (function (p1__4834_SHARP_){return cljs.core.assoc.call(null,p1__4834_SHARP_,"completed",checked);
});})(checked))
,cljs.core.deref.call(null,todo_cljs.todos.todo_list));cljs.core.reset_BANG_.call(null,todo_cljs.todos.todo_list,toggled);
return todo_cljs.todos.refresh_data.call(null);
});
todo_cljs.todos.add_event_listeners = (function add_event_listeners(){clojure.browser.event.listen.call(null,todo_cljs.todos.by_id.call(null,"todo-input"),"keypress",todo_cljs.todos.todo_input_handler);
clojure.browser.event.listen.call(null,todo_cljs.todos.by_id.call(null,"add-todo"),"click",todo_cljs.todos.add_todo_input_handler);
clojure.browser.event.listen.call(null,todo_cljs.todos.by_id.call(null,"remove-todo"),"click",todo_cljs.todos.clear_click_handler);
return clojure.browser.event.listen.call(null,todo_cljs.todos.by_id.call(null,"toggle-all"),"change",todo_cljs.todos.toggle_all_handler);
});
todo_cljs.todos.window_load_handler = (function window_load_handler(){todo_cljs.todos.refresh_data.call(null);
return todo_cljs.todos.add_event_listeners.call(null);
});
goog.events.listen(window,"load",todo_cljs.todos.window_load_handler);

//# sourceMappingURL=todos.js.map