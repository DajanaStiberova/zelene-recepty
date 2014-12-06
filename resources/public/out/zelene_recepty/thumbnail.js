// Compiled by ClojureScript 0.0-2371
goog.provide('zelene_recepty.thumbnail');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('secretary.core');
goog.require('goog.net.XhrIo');
goog.require('domina');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('goog.history.EventType');
goog.require('domina');
goog.require('goog.History');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina.css');
goog.require('secretary.core');
goog.require('goog.events');
zelene_recepty.thumbnail.history = (new goog.History());
zelene_recepty.thumbnail.set_body_overflow_BANG_ = (function set_body_overflow_BANG_(overflow){return domina.set_styles_BANG_.call(null,domina.single_node.call(null,domina.css.sel.call(null,"body")),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),overflow], null));
});
zelene_recepty.thumbnail.setup_close = (function setup_close(modal_close_selector,modal_element){var modal_close_element = domina.single_node.call(null,domina.css.sel.call(null,modal_close_selector));return domina.events.listen_BANG_.call(null,modal_close_element,new cljs.core.Keyword(null,"click","click",1912301393),((function (modal_close_element){
return (function (_){domina.set_styles_BANG_.call(null,modal_element,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null));
return zelene_recepty.thumbnail.set_body_overflow_BANG_.call(null,"auto");
});})(modal_close_element))
);
});
zelene_recepty.thumbnail.on_recipe_html_received = (function on_recipe_html_received(modal_close_selector,modal_selector,event){var modal_element = domina.single_node.call(null,domina.css.sel.call(null,modal_selector));zelene_recepty.thumbnail.set_body_overflow_BANG_.call(null,"hidden");
domina.set_html_BANG_.call(null,modal_element,event.target.getResponseText());
zelene_recepty.thumbnail.setup_close.call(null,modal_close_selector,modal_element);
domina.set_styles_BANG_.call(null,modal_element,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"visible"], null));
return domina.append_BANG_.call(null,domina.css.sel.call(null,"head"),("<meta property='og:title' content=\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(domina.text.call(null,domina.single_node.call(null,domina.css.sel.call(null,"div#recipe-title"))))+"\"/><meta property='og:title' content=\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(domina.text.call(null,domina.single_node.call(null,domina.css.sel.call(null,"div#ingredients"))))+"\"/>"));
});
var action__4610__auto___10781 = (function (params__4611__auto__){if(cljs.core.map_QMARK_.call(null,params__4611__auto__))
{var map__10779 = params__4611__auto__;var map__10779__$1 = ((cljs.core.seq_QMARK_.call(null,map__10779))?cljs.core.apply.call(null,cljs.core.hash_map,map__10779):map__10779);var lang = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));var recipe_id = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"recipe-id","recipe-id",-512262603));return goog.net.XhrIo.send((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("/recipe?Id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(recipe_id)))+"&lang="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang)),cljs.core.partial.call(null,zelene_recepty.thumbnail.on_recipe_html_received,"div.modalWindow div#content a#close","div.modalWindow"));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4611__auto__))
{var vec__10780 = params__4611__auto__;var recipe_id = cljs.core.nth.call(null,vec__10780,(0),null);var lang = cljs.core.nth.call(null,vec__10780,(1),null);return goog.net.XhrIo.send((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("/recipe?Id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(recipe_id)))+"&lang="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang)),cljs.core.partial.call(null,zelene_recepty.thumbnail.on_recipe_html_received,"div.modalWindow div#content a#close","div.modalWindow"));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/recipe/:recipe-id/lang/:lang",action__4610__auto___10781);
/**
* @param {...*} var_args
*/
zelene_recepty.thumbnail.recipe_route = ((function (action__4610__auto___10781){
return (function() { 
var recipe_route__delegate = function (args__4609__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/recipe/:recipe-id/lang/:lang",args__4609__auto__);
};
var recipe_route = function (var_args){
var args__4609__auto__ = null;if (arguments.length > 0) {
  args__4609__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return recipe_route__delegate.call(this,args__4609__auto__);};
recipe_route.cljs$lang$maxFixedArity = 0;
recipe_route.cljs$lang$applyTo = (function (arglist__10782){
var args__4609__auto__ = cljs.core.seq(arglist__10782);
return recipe_route__delegate(args__4609__auto__);
});
recipe_route.cljs$core$IFn$_invoke$arity$variadic = recipe_route__delegate;
return recipe_route;
})()
;})(action__4610__auto___10781))
;
zelene_recepty.thumbnail.set_up = (function set_up(thumbnail_selector){var seq__10789 = cljs.core.seq.call(null,domina.nodes.call(null,domina.css.sel.call(null,thumbnail_selector)));var chunk__10791 = null;var count__10792 = (0);var i__10793 = (0);while(true){
if((i__10793 < count__10792))
{var thumbnail_element = cljs.core._nth.call(null,chunk__10791,i__10793);var recipe_id_10795 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-id","data-recipe-id",-473923859));var recipe_lang_10796 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-lang","data-recipe-lang",-1070285799));domina.events.listen_BANG_.call(null,thumbnail_element,new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__10789,chunk__10791,count__10792,i__10793,recipe_id_10795,recipe_lang_10796,thumbnail_element){
return (function (_){return zelene_recepty.thumbnail.history.setToken(zelene_recepty.thumbnail.recipe_route.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"recipe-id","recipe-id",-512262603),recipe_id_10795,new cljs.core.Keyword(null,"lang","lang",-1819677104),recipe_lang_10796], null)));
});})(seq__10789,chunk__10791,count__10792,i__10793,recipe_id_10795,recipe_lang_10796,thumbnail_element))
);
{
var G__10797 = seq__10789;
var G__10798 = chunk__10791;
var G__10799 = count__10792;
var G__10800 = (i__10793 + (1));
seq__10789 = G__10797;
chunk__10791 = G__10798;
count__10792 = G__10799;
i__10793 = G__10800;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10789);if(temp__4126__auto__)
{var seq__10789__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10789__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__10789__$1);{
var G__10801 = cljs.core.chunk_rest.call(null,seq__10789__$1);
var G__10802 = c__4408__auto__;
var G__10803 = cljs.core.count.call(null,c__4408__auto__);
var G__10804 = (0);
seq__10789 = G__10801;
chunk__10791 = G__10802;
count__10792 = G__10803;
i__10793 = G__10804;
continue;
}
} else
{var thumbnail_element = cljs.core.first.call(null,seq__10789__$1);var recipe_id_10805 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-id","data-recipe-id",-473923859));var recipe_lang_10806 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-lang","data-recipe-lang",-1070285799));domina.events.listen_BANG_.call(null,thumbnail_element,new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__10789,chunk__10791,count__10792,i__10793,recipe_id_10805,recipe_lang_10806,thumbnail_element,seq__10789__$1,temp__4126__auto__){
return (function (_){return zelene_recepty.thumbnail.history.setToken(zelene_recepty.thumbnail.recipe_route.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"recipe-id","recipe-id",-512262603),recipe_id_10805,new cljs.core.Keyword(null,"lang","lang",-1819677104),recipe_lang_10806], null)));
});})(seq__10789,chunk__10791,count__10792,i__10793,recipe_id_10805,recipe_lang_10806,thumbnail_element,seq__10789__$1,temp__4126__auto__))
);
{
var G__10807 = cljs.core.next.call(null,seq__10789__$1);
var G__10808 = null;
var G__10809 = (0);
var G__10810 = (0);
seq__10789 = G__10807;
chunk__10791 = G__10808;
count__10792 = G__10809;
i__10793 = G__10810;
continue;
}
}
} else
{return null;
}
}
break;
}
});
goog.exportSymbol('zelene_recepty.thumbnail.set_up', zelene_recepty.thumbnail.set_up);
goog.events.listen(zelene_recepty.thumbnail.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_.call(null,e.token);
}));
zelene_recepty.thumbnail.history.setEnabled(true);
