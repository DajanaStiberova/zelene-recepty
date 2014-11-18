(ns zelene-recepty.data
  (:require [clojure.java.io :as io]))

(def ^:private read-file (comp read-string slurp))

(def ingredients (read-file "ingredients.edn"))
(def recipes (read-file "recipes.edn"))
(def categories (read-file "categories.edn"))
(def units (read-file "units.edn"))
(def amounts (read-file "amounts.edn"))
