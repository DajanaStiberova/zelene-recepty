(defproject zelene-recepty "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [org.clojure/java.jdbc "0.3.6"]
                 [ring/ring-core "1.3.1"]
                 [ring/ring-jetty-adapter "1.3.1"]
                 [clj-time "0.8.0"]
                 [yesql "0.4.0"]
                 [enlive "1.1.5"]
                 [markdown-clj "0.9.57"]
                 [domina "1.0.3"]
                 [clj-detector "0.0.2"]
                 [net.sf.uadetector/uadetector-resources "2014.10"]
                 [org.postgresql/postgresql "9.3-1100-jdbc41"]]
  :main ^:skip-aot zelene-recepty.main
  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]
  :cljsbuild {:builds [{:id "zelenerecepty-app"
                        :source-paths ["src-cljs"]
                        :compiler {:output-to "resources/public/script/zelenerecepty_app.js"
                                   :output-dir "resources/public/out"
                                   :optimizations :none
                                   :source-maps true}}]})
