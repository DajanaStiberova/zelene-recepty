(ns zelene-recepty.smoothscroll
  (:require [domina :as dom]
            [domina.css :as css]
            [domina.events :as events]))

(defn ^:export set-up [anchor]
  (let [up-element (css/sel anchor)
        scroll-to-element (css/sel (dom/attr up-element :href))]
    (.log js/console scroll-to-element)
    (events/listen! up-element :click #(.log js/console "Anchor clicked"))))
