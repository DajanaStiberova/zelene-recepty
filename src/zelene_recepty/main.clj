(ns zelene-recepty.main
  (:require [ring.adapter.jetty :as jetty]
            [zelene-recepty.web :as web]))

(defn -main [& args]
  (jetty/run-jetty web/handler {:port 80}))
