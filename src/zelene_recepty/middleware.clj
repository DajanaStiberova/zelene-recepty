(ns zelene-recepty.middleware
  (:require [clojure.string :as string]
            [clj-detector.core :as ua ]))

(defn parse-params [raw-params]
  (if raw-params
    (reduce (fn [acc kv-entry]
              (let [[k v] (string/split kv-entry #"=")]
                (assoc acc (keyword k) v)))
            {}
            (string/split raw-params #"&"))
    {}))


(defn wrap-language [handler]
  (fn [request]
    (let [lang (or (-> request :params :lang keyword #{:sk :en}) :sk)]
      (handler (assoc request :lang lang)))))

(defn wrap-params [handler]
  (fn [request]
    (let [parsed (parse-params (:query-string request))]
      (handler (assoc request :params parsed)))))

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
