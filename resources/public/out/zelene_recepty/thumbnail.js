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
var action__4610__auto___8309 = (function (params__4611__auto__){if(cljs.core.map_QMARK_.call(null,params__4611__auto__))
{var map__8307 = params__4611__auto__;var map__8307__$1 = ((cljs.core.seq_QMARK_.call(null,map__8307))?cljs.core.apply.call(null,cljs.core.hash_map,map__8307):map__8307);var lang = cljs.core.get.call(null,map__8307__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));var recipe_id = cljs.core.get.call(null,map__8307__$1,new cljs.core.Keyword(null,"recipe-id","recipe-id",-512262603));return goog.net.XhrIo.send((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("/recipe?Id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(recipe_id)))+"&lang="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang)),cljs.core.partial.call(null,zelene_recepty.thumbnail.on_recipe_html_received,"div.modalWindow div#content a#close","div.modalWindow"));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4611__auto__))
{var vec__8308 = params__4611__auto__;var recipe_id = cljs.core.nth.call(null,vec__8308,(0),null);var lang = cljs.core.nth.call(null,vec__8308,(1),null);return goog.net.XhrIo.send((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("/recipe?Id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(recipe_id)))+"&lang="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang)),cljs.core.partial.call(null,zelene_recepty.thumbnail.on_recipe_html_received,"div.modalWindow div#content a#close","div.modalWindow"));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/recipe/:recipe-id/lang/:lang",action__4610__auto___8309);
/**
* @param {...*} var_args
*/
zelene_recepty.thumbnail.recipe_route = ((function (action__4610__auto___8309){
return (function() { 
var recipe_route__delegate = function (args__4609__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/recipe/:recipe-id/lang/:lang",args__4609__auto__);
};
var recipe_route = function (var_args){
var args__4609__auto__ = null;if (arguments.length > 0) {
  args__4609__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return recipe_route__delegate.call(this,args__4609__auto__);};
recipe_route.cljs$lang$maxFixedArity = 0;
recipe_route.cljs$lang$applyTo = (function (arglist__8310){
var args__4609__auto__ = cljs.core.seq(arglist__8310);
return recipe_route__delegate(args__4609__auto__);
});
recipe_route.cljs$core$IFn$_invoke$arity$variadic = recipe_route__delegate;
return recipe_route;
})()
;})(action__4610__auto___8309))
;
zelene_recepty.thumbnail.set_up = (function set_up(thumbnail_selector){var seq__8317 = cljs.core.seq.call(null,domina.nodes.call(null,domina.css.sel.call(null,thumbnail_selector)));var chunk__8319 = null;var count__8320 = (0);var i__8321 = (0);while(true){
if((i__8321 < count__8320))
{var thumbnail_element = cljs.core._nth.call(null,chunk__8319,i__8321);var recipe_id_8323 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-id","data-recipe-id",-473923859));var recipe_lang_8324 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-lang","data-recipe-lang",-1070285799));domina.events.listen_BANG_.call(null,thumbnail_element,new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__8317,chunk__8319,count__8320,i__8321,recipe_id_8323,recipe_lang_8324,thumbnail_element){
return (function (_){return zelene_recepty.thumbnail.history.setToken(zelene_recepty.thumbnail.recipe_route.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"recipe-id","recipe-id",-512262603),recipe_id_8323,new cljs.core.Keyword(null,"lang","lang",-1819677104),recipe_lang_8324], null)));
});})(seq__8317,chunk__8319,count__8320,i__8321,recipe_id_8323,recipe_lang_8324,thumbnail_element))
);
{
var G__8325 = seq__8317;
var G__8326 = chunk__8319;
var G__8327 = count__8320;
var G__8328 = (i__8321 + (1));
seq__8317 = G__8325;
chunk__8319 = G__8326;
count__8320 = G__8327;
i__8321 = G__8328;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8317);if(temp__4126__auto__)
{var seq__8317__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8317__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__8317__$1);{
var G__8329 = cljs.core.chunk_rest.call(null,seq__8317__$1);
var G__8330 = c__4408__auto__;
var G__8331 = cljs.core.count.call(null,c__4408__auto__);
var G__8332 = (0);
seq__8317 = G__8329;
chunk__8319 = G__8330;
count__8320 = G__8331;
i__8321 = G__8332;
continue;
}
} else
{var thumbnail_element = cljs.core.first.call(null,seq__8317__$1);var recipe_id_8333 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-id","data-recipe-id",-473923859));var recipe_lang_8334 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-lang","data-recipe-lang",-1070285799));domina.events.listen_BANG_.call(null,thumbnail_element,new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__8317,chunk__8319,count__8320,i__8321,recipe_id_8333,recipe_lang_8334,thumbnail_element,seq__8317__$1,temp__4126__auto__){
return (function (_){return zelene_recepty.thumbnail.history.setToken(zelene_recepty.thumbnail.recipe_route.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"recipe-id","recipe-id",-512262603),recipe_id_8333,new cljs.core.Keyword(null,"lang","lang",-1819677104),recipe_lang_8334], null)));
});})(seq__8317,chunk__8319,count__8320,i__8321,recipe_id_8333,recipe_lang_8334,thumbnail_element,seq__8317__$1,temp__4126__auto__))
);
{
var G__8335 = cljs.core.next.call(null,seq__8317__$1);
var G__8336 = null;
var G__8337 = (0);
var G__8338 = (0);
seq__8317 = G__8335;
chunk__8319 = G__8336;
count__8320 = G__8337;
i__8321 = G__8338;
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
