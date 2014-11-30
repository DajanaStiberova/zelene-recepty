// Compiled by ClojureScript 0.0-2371
goog.provide('zelene_recepty.thumbnail');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina.css');
goog.require('domina.css');
goog.require('domina');
goog.require('domina');
zelene_recepty.thumbnail.set_body_overflow_BANG_ = (function set_body_overflow_BANG_(overflow){return domina.set_styles_BANG_.call(null,domina.single_node.call(null,domina.css.sel.call(null,"body")),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),overflow], null));
});
zelene_recepty.thumbnail.setup_close = (function setup_close(modal_close_selector,modal_element){var modal_close_element = domina.single_node.call(null,domina.css.sel.call(null,modal_close_selector));return domina.events.listen_BANG_.call(null,modal_close_element,new cljs.core.Keyword(null,"click","click",1912301393),((function (modal_close_element){
return (function (_){domina.set_styles_BANG_.call(null,modal_element,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null));
return zelene_recepty.thumbnail.set_body_overflow_BANG_.call(null,"auto");
});})(modal_close_element))
);
});
zelene_recepty.thumbnail.on_recipe_html_received = (function on_recipe_html_received(modal_close_selector,modal_element,event){zelene_recepty.thumbnail.set_body_overflow_BANG_.call(null,"hidden");
domina.set_html_BANG_.call(null,modal_element,event.target.getResponseText());
zelene_recepty.thumbnail.setup_close.call(null,modal_close_selector,modal_element);
return domina.set_styles_BANG_.call(null,modal_element,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"visible"], null));
});
zelene_recepty.thumbnail.set_up = (function set_up(modal_selector,modal_close_selector,thumbnail_selector){var modal_element = domina.single_node.call(null,domina.css.sel.call(null,modal_selector));var seq__6228 = cljs.core.seq.call(null,domina.nodes.call(null,domina.css.sel.call(null,thumbnail_selector)));var chunk__6229 = null;var count__6230 = (0);var i__6231 = (0);while(true){
if((i__6231 < count__6230))
{var thumbnail_element = cljs.core._nth.call(null,chunk__6229,i__6231);var recipe_id_6232 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-id","data-recipe-id",-473923859));var recipe_lang_6233 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-lang","data-recipe-lang",-1070285799));domina.events.listen_BANG_.call(null,thumbnail_element,new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__6228,chunk__6229,count__6230,i__6231,recipe_id_6232,recipe_lang_6233,thumbnail_element,modal_element){
return (function (_){return goog.net.XhrIo.send((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("/recipe?Id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(recipe_id_6232)))+"&lang="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(recipe_lang_6233)),cljs.core.partial.call(null,zelene_recepty.thumbnail.on_recipe_html_received,modal_close_selector,modal_element));
});})(seq__6228,chunk__6229,count__6230,i__6231,recipe_id_6232,recipe_lang_6233,thumbnail_element,modal_element))
);
{
var G__6234 = seq__6228;
var G__6235 = chunk__6229;
var G__6236 = count__6230;
var G__6237 = (i__6231 + (1));
seq__6228 = G__6234;
chunk__6229 = G__6235;
count__6230 = G__6236;
i__6231 = G__6237;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6228);if(temp__4126__auto__)
{var seq__6228__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6228__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__6228__$1);{
var G__6238 = cljs.core.chunk_rest.call(null,seq__6228__$1);
var G__6239 = c__4408__auto__;
var G__6240 = cljs.core.count.call(null,c__4408__auto__);
var G__6241 = (0);
seq__6228 = G__6238;
chunk__6229 = G__6239;
count__6230 = G__6240;
i__6231 = G__6241;
continue;
}
} else
{var thumbnail_element = cljs.core.first.call(null,seq__6228__$1);var recipe_id_6242 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-id","data-recipe-id",-473923859));var recipe_lang_6243 = domina.attr.call(null,thumbnail_element,new cljs.core.Keyword(null,"data-recipe-lang","data-recipe-lang",-1070285799));domina.events.listen_BANG_.call(null,thumbnail_element,new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__6228,chunk__6229,count__6230,i__6231,recipe_id_6242,recipe_lang_6243,thumbnail_element,seq__6228__$1,temp__4126__auto__,modal_element){
return (function (_){return goog.net.XhrIo.send((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("/recipe?Id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(recipe_id_6242)))+"&lang="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(recipe_lang_6243)),cljs.core.partial.call(null,zelene_recepty.thumbnail.on_recipe_html_received,modal_close_selector,modal_element));
});})(seq__6228,chunk__6229,count__6230,i__6231,recipe_id_6242,recipe_lang_6243,thumbnail_element,seq__6228__$1,temp__4126__auto__,modal_element))
);
{
var G__6244 = cljs.core.next.call(null,seq__6228__$1);
var G__6245 = null;
var G__6246 = (0);
var G__6247 = (0);
seq__6228 = G__6244;
chunk__6229 = G__6245;
count__6230 = G__6246;
i__6231 = G__6247;
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
