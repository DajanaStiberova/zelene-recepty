(ns zelene-recepty.dev
  (:require [ring.adapter.jetty :as jetty]
            [zelene-recepty.web :as web]))

(defonce server (jetty/run-jetty #'web/handler {:port 3000
                                                :join? false}))
