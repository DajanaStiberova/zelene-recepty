(ns zelene-recepty.smoothscroll
  (:require [domina :as dom]
            [domina.css :as css]
            [domina.events :as events]))

(defn- scroll-to-top-document-distance [w d]
  (if (.-pageYOffset w)
    (.-pageYOffset w)
    (if (.-scrollTop (.-documentElement d))
      (.-scrollTop (.-documentElement d))
      (.-scrollTop (.-body d)))))

(defn- scroll-to-top-distance [element]
  (loop [distance 0
         e element]
    (if e
      (recur (+ distance (.-offsetTop e) (if (.-clientTop e) (.-clientTop e) 0))
             (.-offsetParent e))
      distance)))

(defn ^:export set-up [speed moving-frequency anchor]
  (let [up-element (css/sel anchor)
        scroll-to-element (css/sel (dom/attr up-element :href))
        hop-count (/ speed moving-frequency)]
    (events/listen! up-element :click (fn [e]
                                        (let [scroll-to-top-document-at-begin (scroll-to-top-document-distance js/window js/document)
                                              gap (/ (- (scroll-to-top-distance (dom/single-node scroll-to-element))
                                                        scroll-to-top-document-at-begin)
                                                     hop-count)]
                                          (dotimes [n hop-count]
                                            (.setTimeout js/window
                                                         #(.scrollTo js/window
                                                                     0
                                                                     (+ (* gap n)
                                                                        scroll-to-top-document-at-begin))
                                                         (* moving-frequency n))))))))
