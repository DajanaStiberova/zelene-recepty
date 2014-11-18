// Compiled by ClojureScript 0.0-2371
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_5262 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_5263 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_5264 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_5264,opt_wrapper_5262,table_section_wrapper_5263,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_5262,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_5263,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_5263,cell_wrapper_5264,table_section_wrapper_5263,table_section_wrapper_5263]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3626__auto__ = div.firstChild;if(cljs.core.truth_(and__3626__auto__))
{return div.firstChild.childNodes;
} else
{return and__3626__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__5269 = cljs.core.seq.call(null,tbody);var chunk__5270 = null;var count__5271 = (0);var i__5272 = (0);while(true){
if((i__5272 < count__5271))
{var child = cljs.core._nth.call(null,chunk__5270,i__5272);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__5273 = seq__5269;
var G__5274 = chunk__5270;
var G__5275 = count__5271;
var G__5276 = (i__5272 + (1));
seq__5269 = G__5273;
chunk__5270 = G__5274;
count__5271 = G__5275;
i__5272 = G__5276;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5269);if(temp__4126__auto__)
{var seq__5269__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5269__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__5269__$1);{
var G__5277 = cljs.core.chunk_rest.call(null,seq__5269__$1);
var G__5278 = c__4408__auto__;
var G__5279 = cljs.core.count.call(null,c__4408__auto__);
var G__5280 = (0);
seq__5269 = G__5277;
chunk__5270 = G__5278;
count__5271 = G__5279;
i__5272 = G__5280;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__5269__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__5281 = cljs.core.next.call(null,seq__5269__$1);
var G__5282 = null;
var G__5283 = (0);
var G__5284 = (0);
seq__5269 = G__5281;
chunk__5270 = G__5282;
count__5271 = G__5283;
i__5272 = G__5284;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__5286 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__5286,(0),null);var start_wrap = cljs.core.nth.call(null,vec__5286,(1),null);var end_wrap = cljs.core.nth.call(null,vec__5286,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__5287 = wrapper.lastChild;
var G__5288 = (level - (1));
wrapper = G__5287;
level = G__5288;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3626__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3626__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3626__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj5290 = {};return obj5290;
})();
domina.nodes = (function nodes(content){if((function (){var and__3626__auto__ = content;if(and__3626__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3626__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4275__auto__ = (((content == null))?null:content);return (function (){var or__3638__auto__ = (domina.nodes[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (domina.nodes["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3626__auto__ = nodeseq;if(and__3626__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3626__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4275__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3638__auto__ = (domina.single_node[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (domina.single_node["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3626__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3626__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3626__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__5291){
var mesg = cljs.core.seq(arglist__5291);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__5292){
var mesg = cljs.core.seq(arglist__5292);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__5293){
var contents = cljs.core.seq(arglist__5293);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__5294_SHARP_){return p1__5294_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__5295_SHARP_,p2__5296_SHARP_){return goog.dom.insertChildAt(p1__5295_SHARP_,p2__5296_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__5298_SHARP_,p2__5297_SHARP_){return goog.dom.insertSiblingBefore(p2__5297_SHARP_,p1__5298_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__5300_SHARP_,p2__5299_SHARP_){return goog.dom.insertSiblingAfter(p2__5299_SHARP_,p1__5300_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__5302_SHARP_,p2__5301_SHARP_){return goog.dom.replaceNode(p2__5301_SHARP_,p1__5302_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__5307_5311 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5308_5312 = null;var count__5309_5313 = (0);var i__5310_5314 = (0);while(true){
if((i__5310_5314 < count__5309_5313))
{var n_5315 = cljs.core._nth.call(null,chunk__5308_5312,i__5310_5314);goog.style.setStyle(n_5315,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__5316 = seq__5307_5311;
var G__5317 = chunk__5308_5312;
var G__5318 = count__5309_5313;
var G__5319 = (i__5310_5314 + (1));
seq__5307_5311 = G__5316;
chunk__5308_5312 = G__5317;
count__5309_5313 = G__5318;
i__5310_5314 = G__5319;
continue;
}
} else
{var temp__4126__auto___5320 = cljs.core.seq.call(null,seq__5307_5311);if(temp__4126__auto___5320)
{var seq__5307_5321__$1 = temp__4126__auto___5320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5307_5321__$1))
{var c__4408__auto___5322 = cljs.core.chunk_first.call(null,seq__5307_5321__$1);{
var G__5323 = cljs.core.chunk_rest.call(null,seq__5307_5321__$1);
var G__5324 = c__4408__auto___5322;
var G__5325 = cljs.core.count.call(null,c__4408__auto___5322);
var G__5326 = (0);
seq__5307_5311 = G__5323;
chunk__5308_5312 = G__5324;
count__5309_5313 = G__5325;
i__5310_5314 = G__5326;
continue;
}
} else
{var n_5327 = cljs.core.first.call(null,seq__5307_5321__$1);goog.style.setStyle(n_5327,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__5328 = cljs.core.next.call(null,seq__5307_5321__$1);
var G__5329 = null;
var G__5330 = (0);
var G__5331 = (0);
seq__5307_5311 = G__5328;
chunk__5308_5312 = G__5329;
count__5309_5313 = G__5330;
i__5310_5314 = G__5331;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__5332){
var content = cljs.core.first(arglist__5332);
arglist__5332 = cljs.core.next(arglist__5332);
var name = cljs.core.first(arglist__5332);
var value = cljs.core.rest(arglist__5332);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__5337_5341 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5338_5342 = null;var count__5339_5343 = (0);var i__5340_5344 = (0);while(true){
if((i__5340_5344 < count__5339_5343))
{var n_5345 = cljs.core._nth.call(null,chunk__5338_5342,i__5340_5344);n_5345.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__5346 = seq__5337_5341;
var G__5347 = chunk__5338_5342;
var G__5348 = count__5339_5343;
var G__5349 = (i__5340_5344 + (1));
seq__5337_5341 = G__5346;
chunk__5338_5342 = G__5347;
count__5339_5343 = G__5348;
i__5340_5344 = G__5349;
continue;
}
} else
{var temp__4126__auto___5350 = cljs.core.seq.call(null,seq__5337_5341);if(temp__4126__auto___5350)
{var seq__5337_5351__$1 = temp__4126__auto___5350;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5337_5351__$1))
{var c__4408__auto___5352 = cljs.core.chunk_first.call(null,seq__5337_5351__$1);{
var G__5353 = cljs.core.chunk_rest.call(null,seq__5337_5351__$1);
var G__5354 = c__4408__auto___5352;
var G__5355 = cljs.core.count.call(null,c__4408__auto___5352);
var G__5356 = (0);
seq__5337_5341 = G__5353;
chunk__5338_5342 = G__5354;
count__5339_5343 = G__5355;
i__5340_5344 = G__5356;
continue;
}
} else
{var n_5357 = cljs.core.first.call(null,seq__5337_5351__$1);n_5357.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__5358 = cljs.core.next.call(null,seq__5337_5351__$1);
var G__5359 = null;
var G__5360 = (0);
var G__5361 = (0);
seq__5337_5341 = G__5358;
chunk__5338_5342 = G__5359;
count__5339_5343 = G__5360;
i__5340_5344 = G__5361;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__5362){
var content = cljs.core.first(arglist__5362);
arglist__5362 = cljs.core.next(arglist__5362);
var name = cljs.core.first(arglist__5362);
var value = cljs.core.rest(arglist__5362);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__5367_5371 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5368_5372 = null;var count__5369_5373 = (0);var i__5370_5374 = (0);while(true){
if((i__5370_5374 < count__5369_5373))
{var n_5375 = cljs.core._nth.call(null,chunk__5368_5372,i__5370_5374);n_5375.removeAttribute(cljs.core.name.call(null,name));
{
var G__5376 = seq__5367_5371;
var G__5377 = chunk__5368_5372;
var G__5378 = count__5369_5373;
var G__5379 = (i__5370_5374 + (1));
seq__5367_5371 = G__5376;
chunk__5368_5372 = G__5377;
count__5369_5373 = G__5378;
i__5370_5374 = G__5379;
continue;
}
} else
{var temp__4126__auto___5380 = cljs.core.seq.call(null,seq__5367_5371);if(temp__4126__auto___5380)
{var seq__5367_5381__$1 = temp__4126__auto___5380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5367_5381__$1))
{var c__4408__auto___5382 = cljs.core.chunk_first.call(null,seq__5367_5381__$1);{
var G__5383 = cljs.core.chunk_rest.call(null,seq__5367_5381__$1);
var G__5384 = c__4408__auto___5382;
var G__5385 = cljs.core.count.call(null,c__4408__auto___5382);
var G__5386 = (0);
seq__5367_5371 = G__5383;
chunk__5368_5372 = G__5384;
count__5369_5373 = G__5385;
i__5370_5374 = G__5386;
continue;
}
} else
{var n_5387 = cljs.core.first.call(null,seq__5367_5381__$1);n_5387.removeAttribute(cljs.core.name.call(null,name));
{
var G__5388 = cljs.core.next.call(null,seq__5367_5381__$1);
var G__5389 = null;
var G__5390 = (0);
var G__5391 = (0);
seq__5367_5371 = G__5388;
chunk__5368_5372 = G__5389;
count__5369_5373 = G__5390;
i__5370_5374 = G__5391;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__5393 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__5393,(0),null);var v = cljs.core.nth.call(null,vec__5393,(1),null);if(cljs.core.truth_((function (){var and__3626__auto__ = k;if(cljs.core.truth_(and__3626__auto__))
{return v;
} else
{return and__3626__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__5394_SHARP_){var attr = attrs__$1.item(p1__5394_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__5401_5407 = cljs.core.seq.call(null,styles);var chunk__5402_5408 = null;var count__5403_5409 = (0);var i__5404_5410 = (0);while(true){
if((i__5404_5410 < count__5403_5409))
{var vec__5405_5411 = cljs.core._nth.call(null,chunk__5402_5408,i__5404_5410);var name_5412 = cljs.core.nth.call(null,vec__5405_5411,(0),null);var value_5413 = cljs.core.nth.call(null,vec__5405_5411,(1),null);domina.set_style_BANG_.call(null,content,name_5412,value_5413);
{
var G__5414 = seq__5401_5407;
var G__5415 = chunk__5402_5408;
var G__5416 = count__5403_5409;
var G__5417 = (i__5404_5410 + (1));
seq__5401_5407 = G__5414;
chunk__5402_5408 = G__5415;
count__5403_5409 = G__5416;
i__5404_5410 = G__5417;
continue;
}
} else
{var temp__4126__auto___5418 = cljs.core.seq.call(null,seq__5401_5407);if(temp__4126__auto___5418)
{var seq__5401_5419__$1 = temp__4126__auto___5418;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5401_5419__$1))
{var c__4408__auto___5420 = cljs.core.chunk_first.call(null,seq__5401_5419__$1);{
var G__5421 = cljs.core.chunk_rest.call(null,seq__5401_5419__$1);
var G__5422 = c__4408__auto___5420;
var G__5423 = cljs.core.count.call(null,c__4408__auto___5420);
var G__5424 = (0);
seq__5401_5407 = G__5421;
chunk__5402_5408 = G__5422;
count__5403_5409 = G__5423;
i__5404_5410 = G__5424;
continue;
}
} else
{var vec__5406_5425 = cljs.core.first.call(null,seq__5401_5419__$1);var name_5426 = cljs.core.nth.call(null,vec__5406_5425,(0),null);var value_5427 = cljs.core.nth.call(null,vec__5406_5425,(1),null);domina.set_style_BANG_.call(null,content,name_5426,value_5427);
{
var G__5428 = cljs.core.next.call(null,seq__5401_5419__$1);
var G__5429 = null;
var G__5430 = (0);
var G__5431 = (0);
seq__5401_5407 = G__5428;
chunk__5402_5408 = G__5429;
count__5403_5409 = G__5430;
i__5404_5410 = G__5431;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__5438_5444 = cljs.core.seq.call(null,attrs);var chunk__5439_5445 = null;var count__5440_5446 = (0);var i__5441_5447 = (0);while(true){
if((i__5441_5447 < count__5440_5446))
{var vec__5442_5448 = cljs.core._nth.call(null,chunk__5439_5445,i__5441_5447);var name_5449 = cljs.core.nth.call(null,vec__5442_5448,(0),null);var value_5450 = cljs.core.nth.call(null,vec__5442_5448,(1),null);domina.set_attr_BANG_.call(null,content,name_5449,value_5450);
{
var G__5451 = seq__5438_5444;
var G__5452 = chunk__5439_5445;
var G__5453 = count__5440_5446;
var G__5454 = (i__5441_5447 + (1));
seq__5438_5444 = G__5451;
chunk__5439_5445 = G__5452;
count__5440_5446 = G__5453;
i__5441_5447 = G__5454;
continue;
}
} else
{var temp__4126__auto___5455 = cljs.core.seq.call(null,seq__5438_5444);if(temp__4126__auto___5455)
{var seq__5438_5456__$1 = temp__4126__auto___5455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5438_5456__$1))
{var c__4408__auto___5457 = cljs.core.chunk_first.call(null,seq__5438_5456__$1);{
var G__5458 = cljs.core.chunk_rest.call(null,seq__5438_5456__$1);
var G__5459 = c__4408__auto___5457;
var G__5460 = cljs.core.count.call(null,c__4408__auto___5457);
var G__5461 = (0);
seq__5438_5444 = G__5458;
chunk__5439_5445 = G__5459;
count__5440_5446 = G__5460;
i__5441_5447 = G__5461;
continue;
}
} else
{var vec__5443_5462 = cljs.core.first.call(null,seq__5438_5456__$1);var name_5463 = cljs.core.nth.call(null,vec__5443_5462,(0),null);var value_5464 = cljs.core.nth.call(null,vec__5443_5462,(1),null);domina.set_attr_BANG_.call(null,content,name_5463,value_5464);
{
var G__5465 = cljs.core.next.call(null,seq__5438_5456__$1);
var G__5466 = null;
var G__5467 = (0);
var G__5468 = (0);
seq__5438_5444 = G__5465;
chunk__5439_5445 = G__5466;
count__5440_5446 = G__5467;
i__5441_5447 = G__5468;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__5473_5477 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5474_5478 = null;var count__5475_5479 = (0);var i__5476_5480 = (0);while(true){
if((i__5476_5480 < count__5475_5479))
{var node_5481 = cljs.core._nth.call(null,chunk__5474_5478,i__5476_5480);goog.dom.classes.add(node_5481,class$);
{
var G__5482 = seq__5473_5477;
var G__5483 = chunk__5474_5478;
var G__5484 = count__5475_5479;
var G__5485 = (i__5476_5480 + (1));
seq__5473_5477 = G__5482;
chunk__5474_5478 = G__5483;
count__5475_5479 = G__5484;
i__5476_5480 = G__5485;
continue;
}
} else
{var temp__4126__auto___5486 = cljs.core.seq.call(null,seq__5473_5477);if(temp__4126__auto___5486)
{var seq__5473_5487__$1 = temp__4126__auto___5486;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5473_5487__$1))
{var c__4408__auto___5488 = cljs.core.chunk_first.call(null,seq__5473_5487__$1);{
var G__5489 = cljs.core.chunk_rest.call(null,seq__5473_5487__$1);
var G__5490 = c__4408__auto___5488;
var G__5491 = cljs.core.count.call(null,c__4408__auto___5488);
var G__5492 = (0);
seq__5473_5477 = G__5489;
chunk__5474_5478 = G__5490;
count__5475_5479 = G__5491;
i__5476_5480 = G__5492;
continue;
}
} else
{var node_5493 = cljs.core.first.call(null,seq__5473_5487__$1);goog.dom.classes.add(node_5493,class$);
{
var G__5494 = cljs.core.next.call(null,seq__5473_5487__$1);
var G__5495 = null;
var G__5496 = (0);
var G__5497 = (0);
seq__5473_5477 = G__5494;
chunk__5474_5478 = G__5495;
count__5475_5479 = G__5496;
i__5476_5480 = G__5497;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__5502_5506 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5503_5507 = null;var count__5504_5508 = (0);var i__5505_5509 = (0);while(true){
if((i__5505_5509 < count__5504_5508))
{var node_5510 = cljs.core._nth.call(null,chunk__5503_5507,i__5505_5509);goog.dom.classes.remove(node_5510,class$);
{
var G__5511 = seq__5502_5506;
var G__5512 = chunk__5503_5507;
var G__5513 = count__5504_5508;
var G__5514 = (i__5505_5509 + (1));
seq__5502_5506 = G__5511;
chunk__5503_5507 = G__5512;
count__5504_5508 = G__5513;
i__5505_5509 = G__5514;
continue;
}
} else
{var temp__4126__auto___5515 = cljs.core.seq.call(null,seq__5502_5506);if(temp__4126__auto___5515)
{var seq__5502_5516__$1 = temp__4126__auto___5515;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5502_5516__$1))
{var c__4408__auto___5517 = cljs.core.chunk_first.call(null,seq__5502_5516__$1);{
var G__5518 = cljs.core.chunk_rest.call(null,seq__5502_5516__$1);
var G__5519 = c__4408__auto___5517;
var G__5520 = cljs.core.count.call(null,c__4408__auto___5517);
var G__5521 = (0);
seq__5502_5506 = G__5518;
chunk__5503_5507 = G__5519;
count__5504_5508 = G__5520;
i__5505_5509 = G__5521;
continue;
}
} else
{var node_5522 = cljs.core.first.call(null,seq__5502_5516__$1);goog.dom.classes.remove(node_5522,class$);
{
var G__5523 = cljs.core.next.call(null,seq__5502_5516__$1);
var G__5524 = null;
var G__5525 = (0);
var G__5526 = (0);
seq__5502_5506 = G__5523;
chunk__5503_5507 = G__5524;
count__5504_5508 = G__5525;
i__5505_5509 = G__5526;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__5531_5535 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5532_5536 = null;var count__5533_5537 = (0);var i__5534_5538 = (0);while(true){
if((i__5534_5538 < count__5533_5537))
{var node_5539 = cljs.core._nth.call(null,chunk__5532_5536,i__5534_5538);goog.dom.classes.toggle(node_5539,class$);
{
var G__5540 = seq__5531_5535;
var G__5541 = chunk__5532_5536;
var G__5542 = count__5533_5537;
var G__5543 = (i__5534_5538 + (1));
seq__5531_5535 = G__5540;
chunk__5532_5536 = G__5541;
count__5533_5537 = G__5542;
i__5534_5538 = G__5543;
continue;
}
} else
{var temp__4126__auto___5544 = cljs.core.seq.call(null,seq__5531_5535);if(temp__4126__auto___5544)
{var seq__5531_5545__$1 = temp__4126__auto___5544;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5531_5545__$1))
{var c__4408__auto___5546 = cljs.core.chunk_first.call(null,seq__5531_5545__$1);{
var G__5547 = cljs.core.chunk_rest.call(null,seq__5531_5545__$1);
var G__5548 = c__4408__auto___5546;
var G__5549 = cljs.core.count.call(null,c__4408__auto___5546);
var G__5550 = (0);
seq__5531_5535 = G__5547;
chunk__5532_5536 = G__5548;
count__5533_5537 = G__5549;
i__5534_5538 = G__5550;
continue;
}
} else
{var node_5551 = cljs.core.first.call(null,seq__5531_5545__$1);goog.dom.classes.toggle(node_5551,class$);
{
var G__5552 = cljs.core.next.call(null,seq__5531_5545__$1);
var G__5553 = null;
var G__5554 = (0);
var G__5555 = (0);
seq__5531_5535 = G__5552;
chunk__5532_5536 = G__5553;
count__5533_5537 = G__5554;
i__5534_5538 = G__5555;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_5564__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__5560_5565 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5561_5566 = null;var count__5562_5567 = (0);var i__5563_5568 = (0);while(true){
if((i__5563_5568 < count__5562_5567))
{var node_5569 = cljs.core._nth.call(null,chunk__5561_5566,i__5563_5568);goog.dom.classes.set(node_5569,classes_5564__$1);
{
var G__5570 = seq__5560_5565;
var G__5571 = chunk__5561_5566;
var G__5572 = count__5562_5567;
var G__5573 = (i__5563_5568 + (1));
seq__5560_5565 = G__5570;
chunk__5561_5566 = G__5571;
count__5562_5567 = G__5572;
i__5563_5568 = G__5573;
continue;
}
} else
{var temp__4126__auto___5574 = cljs.core.seq.call(null,seq__5560_5565);if(temp__4126__auto___5574)
{var seq__5560_5575__$1 = temp__4126__auto___5574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5560_5575__$1))
{var c__4408__auto___5576 = cljs.core.chunk_first.call(null,seq__5560_5575__$1);{
var G__5577 = cljs.core.chunk_rest.call(null,seq__5560_5575__$1);
var G__5578 = c__4408__auto___5576;
var G__5579 = cljs.core.count.call(null,c__4408__auto___5576);
var G__5580 = (0);
seq__5560_5565 = G__5577;
chunk__5561_5566 = G__5578;
count__5562_5567 = G__5579;
i__5563_5568 = G__5580;
continue;
}
} else
{var node_5581 = cljs.core.first.call(null,seq__5560_5575__$1);goog.dom.classes.set(node_5581,classes_5564__$1);
{
var G__5582 = cljs.core.next.call(null,seq__5560_5575__$1);
var G__5583 = null;
var G__5584 = (0);
var G__5585 = (0);
seq__5560_5565 = G__5582;
chunk__5561_5566 = G__5583;
count__5562_5567 = G__5584;
i__5563_5568 = G__5585;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__5590_5594 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5591_5595 = null;var count__5592_5596 = (0);var i__5593_5597 = (0);while(true){
if((i__5593_5597 < count__5592_5596))
{var node_5598 = cljs.core._nth.call(null,chunk__5591_5595,i__5593_5597);goog.dom.setTextContent(node_5598,value);
{
var G__5599 = seq__5590_5594;
var G__5600 = chunk__5591_5595;
var G__5601 = count__5592_5596;
var G__5602 = (i__5593_5597 + (1));
seq__5590_5594 = G__5599;
chunk__5591_5595 = G__5600;
count__5592_5596 = G__5601;
i__5593_5597 = G__5602;
continue;
}
} else
{var temp__4126__auto___5603 = cljs.core.seq.call(null,seq__5590_5594);if(temp__4126__auto___5603)
{var seq__5590_5604__$1 = temp__4126__auto___5603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5590_5604__$1))
{var c__4408__auto___5605 = cljs.core.chunk_first.call(null,seq__5590_5604__$1);{
var G__5606 = cljs.core.chunk_rest.call(null,seq__5590_5604__$1);
var G__5607 = c__4408__auto___5605;
var G__5608 = cljs.core.count.call(null,c__4408__auto___5605);
var G__5609 = (0);
seq__5590_5594 = G__5606;
chunk__5591_5595 = G__5607;
count__5592_5596 = G__5608;
i__5593_5597 = G__5609;
continue;
}
} else
{var node_5610 = cljs.core.first.call(null,seq__5590_5604__$1);goog.dom.setTextContent(node_5610,value);
{
var G__5611 = cljs.core.next.call(null,seq__5590_5604__$1);
var G__5612 = null;
var G__5613 = (0);
var G__5614 = (0);
seq__5590_5594 = G__5611;
chunk__5591_5595 = G__5612;
count__5592_5596 = G__5613;
i__5593_5597 = G__5614;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__5619_5623 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5620_5624 = null;var count__5621_5625 = (0);var i__5622_5626 = (0);while(true){
if((i__5622_5626 < count__5621_5625))
{var node_5627 = cljs.core._nth.call(null,chunk__5620_5624,i__5622_5626);goog.dom.forms.setValue(node_5627,value);
{
var G__5628 = seq__5619_5623;
var G__5629 = chunk__5620_5624;
var G__5630 = count__5621_5625;
var G__5631 = (i__5622_5626 + (1));
seq__5619_5623 = G__5628;
chunk__5620_5624 = G__5629;
count__5621_5625 = G__5630;
i__5622_5626 = G__5631;
continue;
}
} else
{var temp__4126__auto___5632 = cljs.core.seq.call(null,seq__5619_5623);if(temp__4126__auto___5632)
{var seq__5619_5633__$1 = temp__4126__auto___5632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5619_5633__$1))
{var c__4408__auto___5634 = cljs.core.chunk_first.call(null,seq__5619_5633__$1);{
var G__5635 = cljs.core.chunk_rest.call(null,seq__5619_5633__$1);
var G__5636 = c__4408__auto___5634;
var G__5637 = cljs.core.count.call(null,c__4408__auto___5634);
var G__5638 = (0);
seq__5619_5623 = G__5635;
chunk__5620_5624 = G__5636;
count__5621_5625 = G__5637;
i__5622_5626 = G__5638;
continue;
}
} else
{var node_5639 = cljs.core.first.call(null,seq__5619_5633__$1);goog.dom.forms.setValue(node_5639,value);
{
var G__5640 = cljs.core.next.call(null,seq__5619_5633__$1);
var G__5641 = null;
var G__5642 = (0);
var G__5643 = (0);
seq__5619_5623 = G__5640;
chunk__5620_5624 = G__5641;
count__5621_5625 = G__5642;
i__5622_5626 = G__5643;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3626__auto__ = allows_inner_html_QMARK_;if(and__3626__auto__)
{var and__3626__auto____$1 = (function (){var or__3638__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3626__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3626__auto____$1;
}
} else
{return and__3626__auto__;
}
})()))
{var value_5654 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__5650_5655 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5651_5656 = null;var count__5652_5657 = (0);var i__5653_5658 = (0);while(true){
if((i__5653_5658 < count__5652_5657))
{var node_5659 = cljs.core._nth.call(null,chunk__5651_5656,i__5653_5658);node_5659.innerHTML = value_5654;
{
var G__5660 = seq__5650_5655;
var G__5661 = chunk__5651_5656;
var G__5662 = count__5652_5657;
var G__5663 = (i__5653_5658 + (1));
seq__5650_5655 = G__5660;
chunk__5651_5656 = G__5661;
count__5652_5657 = G__5662;
i__5653_5658 = G__5663;
continue;
}
} else
{var temp__4126__auto___5664 = cljs.core.seq.call(null,seq__5650_5655);if(temp__4126__auto___5664)
{var seq__5650_5665__$1 = temp__4126__auto___5664;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5650_5665__$1))
{var c__4408__auto___5666 = cljs.core.chunk_first.call(null,seq__5650_5665__$1);{
var G__5667 = cljs.core.chunk_rest.call(null,seq__5650_5665__$1);
var G__5668 = c__4408__auto___5666;
var G__5669 = cljs.core.count.call(null,c__4408__auto___5666);
var G__5670 = (0);
seq__5650_5655 = G__5667;
chunk__5651_5656 = G__5668;
count__5652_5657 = G__5669;
i__5653_5658 = G__5670;
continue;
}
} else
{var node_5671 = cljs.core.first.call(null,seq__5650_5665__$1);node_5671.innerHTML = value_5654;
{
var G__5672 = cljs.core.next.call(null,seq__5650_5665__$1);
var G__5673 = null;
var G__5674 = (0);
var G__5675 = (0);
seq__5650_5655 = G__5672;
chunk__5651_5656 = G__5673;
count__5652_5657 = G__5674;
i__5653_5658 = G__5675;
continue;
}
}
} else
{}
}
break;
}
}catch (e5649){if((e5649 instanceof Error))
{var e_5676 = e5649;domina.replace_children_BANG_.call(null,content,value_5654);
} else
{throw e5649;

}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3626__auto__ = bubble;if(cljs.core.truth_(and__3626__auto__))
{return (value == null);
} else
{return and__3626__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3638__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__5683_5687 = cljs.core.seq.call(null,children);var chunk__5684_5688 = null;var count__5685_5689 = (0);var i__5686_5690 = (0);while(true){
if((i__5686_5690 < count__5685_5689))
{var child_5691 = cljs.core._nth.call(null,chunk__5684_5688,i__5686_5690);frag.appendChild(child_5691);
{
var G__5692 = seq__5683_5687;
var G__5693 = chunk__5684_5688;
var G__5694 = count__5685_5689;
var G__5695 = (i__5686_5690 + (1));
seq__5683_5687 = G__5692;
chunk__5684_5688 = G__5693;
count__5685_5689 = G__5694;
i__5686_5690 = G__5695;
continue;
}
} else
{var temp__4126__auto___5696 = cljs.core.seq.call(null,seq__5683_5687);if(temp__4126__auto___5696)
{var seq__5683_5697__$1 = temp__4126__auto___5696;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5683_5697__$1))
{var c__4408__auto___5698 = cljs.core.chunk_first.call(null,seq__5683_5697__$1);{
var G__5699 = cljs.core.chunk_rest.call(null,seq__5683_5697__$1);
var G__5700 = c__4408__auto___5698;
var G__5701 = cljs.core.count.call(null,c__4408__auto___5698);
var G__5702 = (0);
seq__5683_5687 = G__5699;
chunk__5684_5688 = G__5700;
count__5685_5689 = G__5701;
i__5686_5690 = G__5702;
continue;
}
} else
{var child_5703 = cljs.core.first.call(null,seq__5683_5697__$1);frag.appendChild(child_5703);
{
var G__5704 = cljs.core.next.call(null,seq__5683_5697__$1);
var G__5705 = null;
var G__5706 = (0);
var G__5707 = (0);
seq__5683_5687 = G__5704;
chunk__5684_5688 = G__5705;
count__5685_5689 = G__5706;
i__5686_5690 = G__5707;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__5677_SHARP_,p2__5678_SHARP_){return f.call(null,p1__5677_SHARP_,p2__5678_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3626__auto__ = obj;if(cljs.core.truth_(and__3626__auto__))
{var and__3626__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3626__auto____$1)
{return obj.length;
} else
{return and__3626__auto____$1;
}
} else
{return and__3626__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__5709 = list_thing;if(G__5709)
{var bit__4302__auto__ = (G__5709.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__5709.cljs$core$ISeqable$))
{return true;
} else
{if((!G__5709.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__5709);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__5709);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__5710 = content;if(G__5710)
{var bit__4302__auto__ = (G__5710.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__5710.cljs$core$ISeqable$))
{return true;
} else
{if((!G__5710.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__5710);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__5710);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__5711 = content;if(G__5711)
{var bit__4302__auto__ = (G__5711.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__5711.cljs$core$ISeqable$))
{return true;
} else
{if((!G__5711.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__5711);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__5711);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
