(ns zelene-recepty.thumbnail
  (:require [domina :as dom]
            [domina.css :as css]
            [domina.events :as events]
            [goog.net.XhrIo :as xhr]))

(defn- set-body-overflow! [overflow]
  (dom/set-styles! (dom/single-node (css/sel "body")) {:overflow overflow}))

(defn- setup-close [modal-close-selector modal-element]
  (let [modal-close-element (dom/single-node (css/sel modal-close-selector))]
    (events/listen! modal-close-element
                    :click
                    (fn [_]
                      (dom/set-styles! modal-element {:visibility "hidden"})
                      (set-body-overflow! "auto")))))

(defn- on-recipe-html-received [modal-close-selector modal-element event]
  (set-body-overflow! "hidden")
  (dom/set-html! modal-element (.getResponseText (.-target event)))
  (setup-close modal-close-selector modal-element)
  (dom/set-styles! modal-element {:visibility "visible"}))

(defn ^:export set-up [modal-selector modal-close-selector thumbnail-selector]
  (let [modal-element (dom/single-node (css/sel modal-selector))]
    (doseq [thumbnail-element (dom/nodes (css/sel thumbnail-selector))]
      (let [recipe-id (dom/attr thumbnail-element :data-recipe-id)
            recipe-lang (dom/attr thumbnail-element :data-recipe-lang)]
        (events/listen! thumbnail-element
                        :click
                        (fn [_]
                          (xhr/send (str (str "/recipe?Id=" recipe-id)
                                         "&lang=" recipe-lang)
                                    (partial on-recipe-html-received modal-close-selector modal-element))))))))
