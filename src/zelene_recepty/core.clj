(ns zelene-recepty.core
  (:require [zelene-recepty.data :as data]))

(comment
  "Write a function which will take an recipe (whole-map) and
   return list of ingredients for this recipe.")

(def quacamole (first data/recipes))

(def ff (comp first filter))

(defn list-of-ingredients-number [recipe]
  (:ingredients (ff (fn [recipes]
                      (= recipes recipe))
                    data/recipes)))

(defn ingredient-name [ingredient-number]
  (:name (ff (fn [x]
               (= (:id x)
                  ingredient-number))
             data/ingredients)))

(defn list-of-ingredients [recipe]
  (map ingredient-name (list-of-ingredients-number recipe)))

(comment
  "Write a function which will take an ingredient (whole-map) and
   return a list of recipes containing that ingredient.")

(def sol (first data/ingredients))

(defn list-of-recipes [ingredient]
  (map :title (filter (fn [recipe]
                        (contains? (:ingredients recipe)
                                   (:id ingredient)))
                      data/recipes)))
