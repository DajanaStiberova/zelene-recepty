// Compiled by ClojureScript 0.0-2371
goog.provide('zelene_recepty.smoothscroll');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina.css');
goog.require('domina.css');
goog.require('domina');
goog.require('domina');
zelene_recepty.smoothscroll.set_up = (function set_up(anchor){var up_element = domina.css.sel.call(null,anchor);var scroll_to_element = domina.css.sel.call(null,domina.attr.call(null,up_element,new cljs.core.Keyword(null,"href","href",-793805698)));console.log(scroll_to_element);
return domina.events.listen_BANG_.call(null,up_element,new cljs.core.Keyword(null,"click","click",1912301393),((function (up_element,scroll_to_element){
return (function (){return console.log("Anchor clicked");
});})(up_element,scroll_to_element))
);
});
goog.exportSymbol('zelene_recepty.smoothscroll.set_up', zelene_recepty.smoothscroll.set_up);
