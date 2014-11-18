// Compiled by ClojureScript 0.0-2371
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj5790 = {};return obj5790;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3626__auto__ = evt;if(and__3626__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3626__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3638__auto__ = (domina.events.prevent_default[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (domina.events.prevent_default["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3626__auto__ = evt;if(and__3626__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3626__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3638__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3626__auto__ = evt;if(and__3626__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3626__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3638__auto__ = (domina.events.target[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (domina.events.target["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3626__auto__ = evt;if(and__3626__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3626__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3638__auto__ = (domina.events.current_target[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (domina.events.current_target["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3626__auto__ = evt;if(and__3626__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3626__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3638__auto__ = (domina.events.event_type[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (domina.events.event_type["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3626__auto__ = evt;if(and__3626__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3626__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3638__auto__ = (domina.events.raw_event[goog.typeOf(x__4275__auto__)]);if(or__3638__auto__)
{return or__3638__auto__;
} else
{var or__3638__auto____$1 = (domina.events.raw_event["_"]);if(or__3638__auto____$1)
{return or__3638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t5794 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t5794 = (function (evt,f,create_listener_function,meta5795){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta5795 = meta5795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t5794.cljs$lang$type = true;
domina.events.t5794.cljs$lang$ctorStr = "domina.events/t5794";
domina.events.t5794.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t5794");
});
domina.events.t5794.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t5794.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3638__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return not_found;
}
});
domina.events.t5794.prototype.domina$events$Event$ = true;
domina.events.t5794.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t5794.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t5794.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t5794.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t5794.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t5794.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t5794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5796){var self__ = this;
var _5796__$1 = this;return self__.meta5795;
});
domina.events.t5794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5796,meta5795__$1){var self__ = this;
var _5796__$1 = this;return (new domina.events.t5794(self__.evt,self__.f,self__.create_listener_function,meta5795__$1));
});
domina.events.__GT_t5794 = (function __GT_t5794(evt__$1,f__$1,create_listener_function__$1,meta5795){return (new domina.events.t5794(evt__$1,f__$1,create_listener_function__$1,meta5795));
});
}
return (new domina.events.t5794(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__5801(s__5802){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__5802__$1 = s__5802;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5802__$1);if(temp__4126__auto__)
{var s__5802__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5802__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__5802__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__5804 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__5803 = (0);while(true){
if((i__5803 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__5803);cljs.core.chunk_append.call(null,b__5804,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__5805 = (i__5803 + (1));
i__5803 = G__5805;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5804),iter__5801.call(null,cljs.core.chunk_rest.call(null,s__5802__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5804),null);
}
} else
{var node = cljs.core.first.call(null,s__5802__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__5801.call(null,cljs.core.rest.call(null,s__5802__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4377__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__5814 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5815 = null;var count__5816 = (0);var i__5817 = (0);while(true){
if((i__5817 < count__5816))
{var node = cljs.core._nth.call(null,chunk__5815,i__5817);goog.events.removeAll(node);
{
var G__5822 = seq__5814;
var G__5823 = chunk__5815;
var G__5824 = count__5816;
var G__5825 = (i__5817 + (1));
seq__5814 = G__5822;
chunk__5815 = G__5823;
count__5816 = G__5824;
i__5817 = G__5825;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5814);if(temp__4126__auto__)
{var seq__5814__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5814__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__5814__$1);{
var G__5826 = cljs.core.chunk_rest.call(null,seq__5814__$1);
var G__5827 = c__4408__auto__;
var G__5828 = cljs.core.count.call(null,c__4408__auto__);
var G__5829 = (0);
seq__5814 = G__5826;
chunk__5815 = G__5827;
count__5816 = G__5828;
i__5817 = G__5829;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__5814__$1);goog.events.removeAll(node);
{
var G__5830 = cljs.core.next.call(null,seq__5814__$1);
var G__5831 = null;
var G__5832 = (0);
var G__5833 = (0);
seq__5814 = G__5830;
chunk__5815 = G__5831;
count__5816 = G__5832;
i__5817 = G__5833;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__5818 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__5819 = null;var count__5820 = (0);var i__5821 = (0);while(true){
if((i__5821 < count__5820))
{var node = cljs.core._nth.call(null,chunk__5819,i__5821);goog.events.removeAll(node,type__$1);
{
var G__5834 = seq__5818;
var G__5835 = chunk__5819;
var G__5836 = count__5820;
var G__5837 = (i__5821 + (1));
seq__5818 = G__5834;
chunk__5819 = G__5835;
count__5820 = G__5836;
i__5821 = G__5837;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5818);if(temp__4126__auto__)
{var seq__5818__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5818__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__5818__$1);{
var G__5838 = cljs.core.chunk_rest.call(null,seq__5818__$1);
var G__5839 = c__4408__auto__;
var G__5840 = cljs.core.count.call(null,c__4408__auto__);
var G__5841 = (0);
seq__5818 = G__5838;
chunk__5819 = G__5839;
count__5820 = G__5840;
i__5821 = G__5841;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__5818__$1);goog.events.removeAll(node,type__$1);
{
var G__5842 = cljs.core.next.call(null,seq__5818__$1);
var G__5843 = null;
var G__5844 = (0);
var G__5845 = (0);
seq__5818 = G__5842;
chunk__5819 = G__5843;
count__5820 = G__5844;
i__5821 = G__5845;
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
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__5846 = parent;
var G__5847 = cljs.core.cons.call(null,parent,so_far);
n = G__5846;
so_far = G__5847;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){evt.target = domina.single_node.call(null,source);
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__5856_5864 = cljs.core.seq.call(null,ancestors);var chunk__5857_5865 = null;var count__5858_5866 = (0);var i__5859_5867 = (0);while(true){
if((i__5859_5867 < count__5858_5866))
{var n_5868 = cljs.core._nth.call(null,chunk__5857_5865,i__5859_5867);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_5868;
goog.events.fireListeners(n_5868,evt.type,true,evt);
}
{
var G__5869 = seq__5856_5864;
var G__5870 = chunk__5857_5865;
var G__5871 = count__5858_5866;
var G__5872 = (i__5859_5867 + (1));
seq__5856_5864 = G__5869;
chunk__5857_5865 = G__5870;
count__5858_5866 = G__5871;
i__5859_5867 = G__5872;
continue;
}
} else
{var temp__4126__auto___5873 = cljs.core.seq.call(null,seq__5856_5864);if(temp__4126__auto___5873)
{var seq__5856_5874__$1 = temp__4126__auto___5873;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5856_5874__$1))
{var c__4408__auto___5875 = cljs.core.chunk_first.call(null,seq__5856_5874__$1);{
var G__5876 = cljs.core.chunk_rest.call(null,seq__5856_5874__$1);
var G__5877 = c__4408__auto___5875;
var G__5878 = cljs.core.count.call(null,c__4408__auto___5875);
var G__5879 = (0);
seq__5856_5864 = G__5876;
chunk__5857_5865 = G__5877;
count__5858_5866 = G__5878;
i__5859_5867 = G__5879;
continue;
}
} else
{var n_5880 = cljs.core.first.call(null,seq__5856_5874__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_5880;
goog.events.fireListeners(n_5880,evt.type,true,evt);
}
{
var G__5881 = cljs.core.next.call(null,seq__5856_5874__$1);
var G__5882 = null;
var G__5883 = (0);
var G__5884 = (0);
seq__5856_5864 = G__5881;
chunk__5857_5865 = G__5882;
count__5858_5866 = G__5883;
i__5859_5867 = G__5884;
continue;
}
}
} else
{}
}
break;
}
var seq__5860_5885 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__5861_5886 = null;var count__5862_5887 = (0);var i__5863_5888 = (0);while(true){
if((i__5863_5888 < count__5862_5887))
{var n_5889 = cljs.core._nth.call(null,chunk__5861_5886,i__5863_5888);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_5889;
goog.events.fireListeners(n_5889,evt.type,false,evt);
}
{
var G__5890 = seq__5860_5885;
var G__5891 = chunk__5861_5886;
var G__5892 = count__5862_5887;
var G__5893 = (i__5863_5888 + (1));
seq__5860_5885 = G__5890;
chunk__5861_5886 = G__5891;
count__5862_5887 = G__5892;
i__5863_5888 = G__5893;
continue;
}
} else
{var temp__4126__auto___5894 = cljs.core.seq.call(null,seq__5860_5885);if(temp__4126__auto___5894)
{var seq__5860_5895__$1 = temp__4126__auto___5894;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5860_5895__$1))
{var c__4408__auto___5896 = cljs.core.chunk_first.call(null,seq__5860_5895__$1);{
var G__5897 = cljs.core.chunk_rest.call(null,seq__5860_5895__$1);
var G__5898 = c__4408__auto___5896;
var G__5899 = cljs.core.count.call(null,c__4408__auto___5896);
var G__5900 = (0);
seq__5860_5885 = G__5897;
chunk__5861_5886 = G__5898;
count__5862_5887 = G__5899;
i__5863_5888 = G__5900;
continue;
}
} else
{var n_5901 = cljs.core.first.call(null,seq__5860_5895__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_5901;
goog.events.fireListeners(n_5901,evt.type,false,evt);
}
{
var G__5902 = cljs.core.next.call(null,seq__5860_5895__$1);
var G__5903 = null;
var G__5904 = (0);
var G__5905 = (0);
seq__5860_5885 = G__5902;
chunk__5861_5886 = G__5903;
count__5862_5887 = G__5904;
i__5863_5888 = G__5905;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3626__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3626__auto__))
{return o.dispatchEvent;
} else
{return and__3626__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__5912_5918 = cljs.core.seq.call(null,evt_map);var chunk__5913_5919 = null;var count__5914_5920 = (0);var i__5915_5921 = (0);while(true){
if((i__5915_5921 < count__5914_5920))
{var vec__5916_5922 = cljs.core._nth.call(null,chunk__5913_5919,i__5915_5921);var k_5923 = cljs.core.nth.call(null,vec__5916_5922,(0),null);var v_5924 = cljs.core.nth.call(null,vec__5916_5922,(1),null);(evt[k_5923] = v_5924);
{
var G__5925 = seq__5912_5918;
var G__5926 = chunk__5913_5919;
var G__5927 = count__5914_5920;
var G__5928 = (i__5915_5921 + (1));
seq__5912_5918 = G__5925;
chunk__5913_5919 = G__5926;
count__5914_5920 = G__5927;
i__5915_5921 = G__5928;
continue;
}
} else
{var temp__4126__auto___5929 = cljs.core.seq.call(null,seq__5912_5918);if(temp__4126__auto___5929)
{var seq__5912_5930__$1 = temp__4126__auto___5929;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5912_5930__$1))
{var c__4408__auto___5931 = cljs.core.chunk_first.call(null,seq__5912_5930__$1);{
var G__5932 = cljs.core.chunk_rest.call(null,seq__5912_5930__$1);
var G__5933 = c__4408__auto___5931;
var G__5934 = cljs.core.count.call(null,c__4408__auto___5931);
var G__5935 = (0);
seq__5912_5918 = G__5932;
chunk__5913_5919 = G__5933;
count__5914_5920 = G__5934;
i__5915_5921 = G__5935;
continue;
}
} else
{var vec__5917_5936 = cljs.core.first.call(null,seq__5912_5930__$1);var k_5937 = cljs.core.nth.call(null,vec__5917_5936,(0),null);var v_5938 = cljs.core.nth.call(null,vec__5917_5936,(1),null);(evt[k_5937] = v_5938);
{
var G__5939 = cljs.core.next.call(null,seq__5912_5930__$1);
var G__5940 = null;
var G__5941 = (0);
var G__5942 = (0);
seq__5912_5918 = G__5939;
chunk__5913_5919 = G__5940;
count__5914_5920 = G__5941;
i__5915_5921 = G__5942;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__5943_SHARP_){return goog.events.getListeners(p1__5943_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
