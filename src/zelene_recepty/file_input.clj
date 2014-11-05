(ns zelene-recepty.file-input
  (:require [clojure.java.io :as io]))

(defn read-numbers-from-file [file-path]
  (with-open [rdr (io/reader file-path)]
    (reduce (fn [data-count data]
              (* data-count
                 (read-string data)))
            1
            (line-seq rdr))))
