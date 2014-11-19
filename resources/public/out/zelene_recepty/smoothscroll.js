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
var G__5454 = ((distance + e.offsetTop) + (cljs.core.truth_(e.clientTop)?e.clientTop:(0)));
var G__5455 = e.offsetParent;
distance = G__5454;
e = G__5455;
continue;
}
} else
{return distance;
}
break;
}
});
zelene_recepty.smoothscroll.set_up = (function set_up(speed,moving_frequency,anchor){var up_element = domina.css.sel.call(null,anchor);var scroll_to_element = domina.css.sel.call(null,domina.attr.call(null,up_element,new cljs.core.Keyword(null,"href","href",-793805698)));var hop_count = (speed / moving_frequency);return domina.events.listen_BANG_.call(null,up_element,new cljs.core.Keyword(null,"click","click",1912301393),((function (up_element,scroll_to_element,hop_count){
return (function (e){var scroll_to_top_document_at_begin = zelene_recepty.smoothscroll.scroll_to_top_document_distance.call(null,window,document);var gap = ((zelene_recepty.smoothscroll.scroll_to_top_distance.call(null,domina.single_node.call(null,scroll_to_element)) - scroll_to_top_document_at_begin) / hop_count);var n__4510__auto__ = hop_count;var n = (0);while(true){
if((n < n__4510__auto__))
{window.setTimeout(((function (n,n__4510__auto__,scroll_to_top_document_at_begin,gap,up_element,scroll_to_element,hop_count){
return (function (){return window.scrollTo((0),((gap * n) + scroll_to_top_document_at_begin));
});})(n,n__4510__auto__,scroll_to_top_document_at_begin,gap,up_element,scroll_to_element,hop_count))
,(moving_frequency * n));
{
var G__5456 = (n + (1));
n = G__5456;
continue;
}
} else
{return null;
}
break;
}
});})(up_element,scroll_to_element,hop_count))
);
});
goog.exportSymbol('zelene_recepty.smoothscroll.set_up', zelene_recepty.smoothscroll.set_up);
