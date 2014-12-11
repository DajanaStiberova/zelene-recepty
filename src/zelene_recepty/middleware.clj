(ns zelene-recepty.middleware
  (:require [zelene-recepty.utils :as utils]
            [clojure.string :as string]
            [clj-detector.core :as ua ]))

(defn wrap-language [handler]
  (fn [request]
    (let [lang (or (-> request :params :lang keyword #{:sk :en}) :sk)]
      (handler (assoc request :lang lang)))))

(defn- keywordize [m]
  (->> m
       (map (fn [[k v]]
              [(keyword k) v]))
       (into {})))

(defn wrap-keyword-params [handler]
  (fn [request]
    (handler (-> request
                 (update-in [:params] keywordize)
                 (update-in [:query-params] keywordize)
                 (update-in [:form-params] keywordize)))))

(defn wrap-html-response [handler]
  (fn [request]
    (-> request
        handler
        (assoc :headers {"Content-Type" "text/html; charset=utf-8"})
        (update-in [:body] (partial apply str)))))

(defn wrap-ua-info [handler]
  (fn [{:keys [headers] :as request}]
    (let [user-agent (ua/user-agent (get headers "user-agent"))]
      (handler (assoc request
                 :user-agent
                 {:name (:name user-agent)
                  :producer (:producer user-agent)
                  :type (:type user-agent)
                  :version (:version user-agent)
                  :device (:device user-agent)})))))




(defn wrap-in-construction [handler in-construction-handler]
  (fn [{{device :device} :user-agent :as request}]
    (if (#{:phone :tablet :pda} device)
      (in-construction-handler request)
      (handler request))))

(defn wrap-add-recipe-params [handler]
  (fn [request]
    (handler (update-in request [:form-params] utils/recipe-data-from-params))))
