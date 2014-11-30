// Compiled by ClojureScript 0.0-2371
goog.provide('zelene_recepty.smoothscroll');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina.css');
goog.require('domina.css');
goog.require('domina');
goog.require('domina');
zelene_recepty.smoothscroll.scroll_to_top_document_distance = (function scroll_to_top_document_distance(w,d){if(cljs.core.truth_(w.pageYOffset))
{return w.pageYOffset;
} else
{if(cljs.core.truth_(d.documentElement.scrollTop))
{return d.documentElement.scrollTop;
} else
{return d.body.scrollTop;
}
}
});
zelene_recepty.smoothscroll.scroll_to_top_distance = (function scroll_to_top_distance(element){var distance = (0);var e = element;while(true){
if(cljs.core.truth_(e))
{{
var G__6277 = ((distance + e.offsetTop) + (cljs.core.truth_(e.clientTop)?e.clientTop:(0)));
var G__6278 = e.offsetParent;
distance = G__6277;
e = G__6278;
continue;
}
} else
{return distance;
}
break;
}
});
zelene_recepty.smoothscroll.set_up = (function set_up(speed,moving_frequency,anchor){var temp__4126__auto__ = domina.single_node.call(null,domina.css.sel.call(null,anchor));if(cljs.core.truth_(temp__4126__auto__))
{var up_element = temp__4126__auto__;var scroll_to_element = domina.css.sel.call(null,domina.attr.call(null,up_element,new cljs.core.Keyword(null,"href","href",-793805698)));var hop_count = (speed / moving_frequency);return domina.events.listen_BANG_.call(null,up_element,new cljs.core.Keyword(null,"click","click",1912301393),((function (scroll_to_element,hop_count,up_element,temp__4126__auto__){
return (function (e){var scroll_to_top_document_at_begin = zelene_recepty.smoothscroll.scroll_to_top_document_distance.call(null,window,document);var gap = ((zelene_recepty.smoothscroll.scroll_to_top_distance.call(null,domina.single_node.call(null,scroll_to_element)) - scroll_to_top_document_at_begin) / hop_count);var n__4508__auto__ = hop_count;var n = (0);while(true){
if((n < n__4508__auto__))
{window.setTimeout(((function (n,n__4508__auto__,scroll_to_top_document_at_begin,gap,scroll_to_element,hop_count,up_element,temp__4126__auto__){
return (function (){return window.scrollTo((0),((gap * n) + scroll_to_top_document_at_begin));
});})(n,n__4508__auto__,scroll_to_top_document_at_begin,gap,scroll_to_element,hop_count,up_element,temp__4126__auto__))
,(moving_frequency * n));
{
var G__6279 = (n + (1));
n = G__6279;
continue;
}
} else
{return null;
}
break;
}
});})(scroll_to_element,hop_count,up_element,temp__4126__auto__))
);
} else
{return null;
}
});
goog.exportSymbol('zelene_recepty.smoothscroll.set_up', zelene_recepty.smoothscroll.set_up);
