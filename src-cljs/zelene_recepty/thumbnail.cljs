(ns zelene-recepty.thumbnail
  (:require [domina :as dom]
            [domina.css :as css]
            [domina.events :as events]
            [goog.net.XhrIo :as xhr]
            [goog.events :as goog-events]
            [goog.history.EventType :as EventType]
            [secretary.core :as secretary :refer-macros [defroute]])
  (:import goog.History))

(def ^:private history (History.))

(defn- set-body-overflow! [overflow]
  (dom/set-styles! (dom/single-node (css/sel "body")) {:overflow overflow}))

(defn- setup-close [modal-close-selector modal-element]
  (let [modal-close-element (dom/single-node (css/sel modal-close-selector))]
    (events/listen! modal-close-element
                    :click
                    (fn [_]
                      (dom/set-styles! modal-element {:visibility "hidden"})
                      (set-body-overflow! "auto")))))

(defn- on-recipe-html-received [modal-close-selector modal-selector event]
  (let [modal-element (dom/single-node (css/sel modal-selector))]
    (set-body-overflow! "hidden")
    (dom/set-html! modal-element (.getResponseText (.-target event)))
    (setup-close modal-close-selector modal-element)
    (dom/set-styles! modal-element {:visibility "visible"})))

(defroute recipe-route "/recipe/:recipe-id/lang/:lang" [recipe-id lang]
  (xhr/send (str (str "/recipe?Id=" recipe-id)
                 "&lang=" lang)
            (partial on-recipe-html-received
                     "div.modalWindow div#content a#close"
                     "div.modalWindow")))

(defn ^:export set-up [thumbnail-selector]
  (doseq [thumbnail-element (dom/nodes (css/sel thumbnail-selector))
          :let [recipe-id (dom/attr thumbnail-element :data-recipe-id)
                recipe-lang (dom/attr thumbnail-element :data-recipe-lang)]]
    (events/listen! thumbnail-element
                    :click
                    (fn [_]
                      (.setToken history (recipe-route {:recipe-id recipe-id :lang recipe-lang}))))))

(goog-events/listen history EventType/NAVIGATE (fn [e]
                                                 (secretary/dispatch! (.-token e))))
(.setEnabled history true)
