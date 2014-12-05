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
var action__4610__auto___8213 = (function (params__4611__auto__){if(cljs.core.map_QMARK_.call(null,params__4611__auto__))
{var map__8211 = params__4611__auto__;var map__8211__$1 = ((cljs.core.seq_QMARK_.call(null,map__8211))?cljs.core.apply.call(null,cljs.core.hash_map,map__8211):map__8211);var lang = cljs.core.get.call(null,map__8211__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));var recipe_id = cljs.core.get.call(null,map__8211__$1,new cljs.core.Keyword(null,"recipe-id","recipe-id",-512262603));return goog.net.XhrIo.send((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("/recipe?Id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(recipe_id)))+"&lang="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang)),cljs.core.partial.call(null,zelene_recepty.thumbnail.on_recipe_html_received,"div.modalWindow div#content a#close","div.modalWindow"));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4611__auto__))
{var vec__8212 = params__4611__auto__;var recipe_id = cljs.core.nth.call(null,vec__8212,(0),null);var lang = cljs.core.nth.call(null,vec__8212,(1),null);return goog.net.XhrIo.send((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("/recipe?Id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(recipe_id)))+"&lang="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang)),cljs.core.partial.call(null,zelene_recepty.thumbnail.on_recipe_html_received,"div.modalWindow div#content a#close","div.modalWindow"));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/recipe/:recipe-id/lang/:lang",action__4610__auto___8213);
/**
* @param {...*} var_args
*/
zelene_recepty.thumbnail.recipe_route = ((function (action__4610__auto___8213){
return (function() { 
var recipe_route__delegate = function (args__4609__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/recipe/:recipe-id/lang/:lang",args__4609__auto__);
};
var recipe_route = function (var_args){
var args__4609__auto__ = null;if (arguments.length > 0) {
  args__4609__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return recipe_route__delegate.call(this,args__4609__auto__);};
recipe_route.cljs$lang$maxFixedArity = 0;
recipe_route.cljs$lang$applyTo = (function (arglist__8214){
var args__4609__auto__ = cljs.core.seq(arglist__8214);
return recipe_route__delegate(args__4609__auto__);
});
recipe_route.cljs$core$IFn$_invoke$arity$variadic = recipe_route__delegate;
return recipe_route;
})()
;})(action__4610__auto___8213))
;
zelene_recepty.thumbnail.set_up = (function set_up(thumbnail_selector){var seq__8221 = cljs.core.seq.call(null,domina.nodes.call(null,domina.css.sel.call(null,thumbnail_selector)));var chunk__8223 = null;var count__8224 = (0);var i__8225 = (0);while(true){
if((i__8225 < count__8224))
{var thumbnail_element = cljs.core._nth.call(null,chunk__8223,i__8225);var recipe_id_8227 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-id","data-recipe-id",-473923859));var recipe_lang_8228 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-lang","data-recipe-lang",-1070285799));domina.events.listen_BANG_.call(null,thumbnail_element,new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__8221,chunk__8223,count__8224,i__8225,recipe_id_8227,recipe_lang_8228,thumbnail_element){
return (function (_){return zelene_recepty.thumbnail.history.setToken(zelene_recepty.thumbnail.recipe_route.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"recipe-id","recipe-id",-512262603),recipe_id_8227,new cljs.core.Keyword(null,"lang","lang",-1819677104),recipe_lang_8228], null)));
});})(seq__8221,chunk__8223,count__8224,i__8225,recipe_id_8227,recipe_lang_8228,thumbnail_element))
);
{
var G__8229 = seq__8221;
var G__8230 = chunk__8223;
var G__8231 = count__8224;
var G__8232 = (i__8225 + (1));
seq__8221 = G__8229;
chunk__8223 = G__8230;
count__8224 = G__8231;
i__8225 = G__8232;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8221);if(temp__4126__auto__)
{var seq__8221__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8221__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__8221__$1);{
var G__8233 = cljs.core.chunk_rest.call(null,seq__8221__$1);
var G__8234 = c__4408__auto__;
var G__8235 = cljs.core.count.call(null,c__4408__auto__);
var G__8236 = (0);
seq__8221 = G__8233;
chunk__8223 = G__8234;
count__8224 = G__8235;
i__8225 = G__8236;
continue;
}
} else
{var thumbnail_element = cljs.core.first.call(null,seq__8221__$1);var recipe_id_8237 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-id","data-recipe-id",-473923859));var recipe_lang_8238 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-lang","data-recipe-lang",-1070285799));domina.events.listen_BANG_.call(null,thumbnail_element,new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__8221,chunk__8223,count__8224,i__8225,recipe_id_8237,recipe_lang_8238,thumbnail_element,seq__8221__$1,temp__4126__auto__){
return (function (_){return zelene_recepty.thumbnail.history.setToken(zelene_recepty.thumbnail.recipe_route.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"recipe-id","recipe-id",-512262603),recipe_id_8237,new cljs.core.Keyword(null,"lang","lang",-1819677104),recipe_lang_8238], null)));
});})(seq__8221,chunk__8223,count__8224,i__8225,recipe_id_8237,recipe_lang_8238,thumbnail_element,seq__8221__$1,temp__4126__auto__))
);
{
var G__8239 = cljs.core.next.call(null,seq__8221__$1);
var G__8240 = null;
var G__8241 = (0);
var G__8242 = (0);
seq__8221 = G__8239;
chunk__8223 = G__8240;
count__8224 = G__8241;
i__8225 = G__8242;
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
