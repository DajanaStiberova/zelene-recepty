(ns zelene-recepty.middleware
  (:require [clojure.string :as string]))

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
    (assoc (handler request)
      :headers {"Content-Type" "text/html; charset=utf-8"})))
