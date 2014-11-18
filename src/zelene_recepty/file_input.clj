(ns zelene-recepty.file-input
  (:require [clojure.java.io :as io]
            [markdown.core :as markdown]))

(defn recipe-text [path]
  (-> path
      io/resource
      io/file
      slurp
      markdown/md-to-html-string))
