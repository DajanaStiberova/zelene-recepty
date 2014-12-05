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
return domina.set_styles_BANG_.call(null,modal_element,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"visible"], null));
});
var action__4610__auto___8341 = (function (params__4611__auto__){if(cljs.core.map_QMARK_.call(null,params__4611__auto__))
{var map__8339 = params__4611__auto__;var map__8339__$1 = ((cljs.core.seq_QMARK_.call(null,map__8339))?cljs.core.apply.call(null,cljs.core.hash_map,map__8339):map__8339);var lang = cljs.core.get.call(null,map__8339__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));var recipe_id = cljs.core.get.call(null,map__8339__$1,new cljs.core.Keyword(null,"recipe-id","recipe-id",-512262603));return goog.net.XhrIo.send((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("/recipe?Id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(recipe_id)))+"&lang="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang)),cljs.core.partial.call(null,zelene_recepty.thumbnail.on_recipe_html_received,"div.modalWindow div#content a#close","div.modalWindow"));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4611__auto__))
{var vec__8340 = params__4611__auto__;var recipe_id = cljs.core.nth.call(null,vec__8340,(0),null);var lang = cljs.core.nth.call(null,vec__8340,(1),null);return goog.net.XhrIo.send((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("/recipe?Id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(recipe_id)))+"&lang="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang)),cljs.core.partial.call(null,zelene_recepty.thumbnail.on_recipe_html_received,"div.modalWindow div#content a#close","div.modalWindow"));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/recipe/:recipe-id/lang/:lang",action__4610__auto___8341);
/**
* @param {...*} var_args
*/
zelene_recepty.thumbnail.recipe_route = ((function (action__4610__auto___8341){
return (function() { 
var recipe_route__delegate = function (args__4609__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/recipe/:recipe-id/lang/:lang",args__4609__auto__);
};
var recipe_route = function (var_args){
var args__4609__auto__ = null;if (arguments.length > 0) {
  args__4609__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return recipe_route__delegate.call(this,args__4609__auto__);};
recipe_route.cljs$lang$maxFixedArity = 0;
recipe_route.cljs$lang$applyTo = (function (arglist__8342){
var args__4609__auto__ = cljs.core.seq(arglist__8342);
return recipe_route__delegate(args__4609__auto__);
});
recipe_route.cljs$core$IFn$_invoke$arity$variadic = recipe_route__delegate;
return recipe_route;
})()
;})(action__4610__auto___8341))
;
zelene_recepty.thumbnail.set_up = (function set_up(thumbnail_selector){var seq__8349 = cljs.core.seq.call(null,domina.nodes.call(null,domina.css.sel.call(null,thumbnail_selector)));var chunk__8351 = null;var count__8352 = (0);var i__8353 = (0);while(true){
if((i__8353 < count__8352))
{var thumbnail_element = cljs.core._nth.call(null,chunk__8351,i__8353);var recipe_id_8355 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-id","data-recipe-id",-473923859));var recipe_lang_8356 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-lang","data-recipe-lang",-1070285799));domina.events.listen_BANG_.call(null,thumbnail_element,new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__8349,chunk__8351,count__8352,i__8353,recipe_id_8355,recipe_lang_8356,thumbnail_element){
return (function (_){return zelene_recepty.thumbnail.history.setToken(zelene_recepty.thumbnail.recipe_route.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"recipe-id","recipe-id",-512262603),recipe_id_8355,new cljs.core.Keyword(null,"lang","lang",-1819677104),recipe_lang_8356], null)));
});})(seq__8349,chunk__8351,count__8352,i__8353,recipe_id_8355,recipe_lang_8356,thumbnail_element))
);
{
var G__8357 = seq__8349;
var G__8358 = chunk__8351;
var G__8359 = count__8352;
var G__8360 = (i__8353 + (1));
seq__8349 = G__8357;
chunk__8351 = G__8358;
count__8352 = G__8359;
i__8353 = G__8360;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8349);if(temp__4126__auto__)
{var seq__8349__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8349__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__8349__$1);{
var G__8361 = cljs.core.chunk_rest.call(null,seq__8349__$1);
var G__8362 = c__4408__auto__;
var G__8363 = cljs.core.count.call(null,c__4408__auto__);
var G__8364 = (0);
seq__8349 = G__8361;
chunk__8351 = G__8362;
count__8352 = G__8363;
i__8353 = G__8364;
continue;
}
} else
{var thumbnail_element = cljs.core.first.call(null,seq__8349__$1);var recipe_id_8365 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-id","data-recipe-id",-473923859));var recipe_lang_8366 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-lang","data-recipe-lang",-1070285799));domina.events.listen_BANG_.call(null,thumbnail_element,new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__8349,chunk__8351,count__8352,i__8353,recipe_id_8365,recipe_lang_8366,thumbnail_element,seq__8349__$1,temp__4126__auto__){
return (function (_){return zelene_recepty.thumbnail.history.setToken(zelene_recepty.thumbnail.recipe_route.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"recipe-id","recipe-id",-512262603),recipe_id_8365,new cljs.core.Keyword(null,"lang","lang",-1819677104),recipe_lang_8366], null)));
});})(seq__8349,chunk__8351,count__8352,i__8353,recipe_id_8365,recipe_lang_8366,thumbnail_element,seq__8349__$1,temp__4126__auto__))
);
{
var G__8367 = cljs.core.next.call(null,seq__8349__$1);
var G__8368 = null;
var G__8369 = (0);
var G__8370 = (0);
seq__8349 = G__8367;
chunk__8351 = G__8368;
count__8352 = G__8369;
i__8353 = G__8370;
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
