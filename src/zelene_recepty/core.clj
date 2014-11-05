(ns zelene-recepty.core
  (:require [zelene-recepty.data :as data]
            [clojure.string :as string]))

(def guacamole (first data/recipes))

(def sol (first data/ingredients))

(def  ^:private ff (comp first filter))

(defn name-for-ingredient [all-ingredients language-key ingredient-id]
  (language-key (first (map :name (filter (fn [ingredients]
                                            (= ingredient-id
                                               (:id ingredients)))
                                          all-ingredients)))))

(defn group-by-first-letter [ key coll]
  ;; "Collection is grouped by uppercase of first letter under specified key"
  (group-by (comp string/upper-case str first key) coll))

(defn recipes-for-ingredient [ingredient-id all-recipes]

  (filter (fn [recipe]
            (contains? (:ingredients recipe) ingredient-id))
          all-recipes))

(defn recipes-for-category [category-number all-recipes]
  (filter (fn [recipe]
            (= category-number (:category recipe)))
          all-recipes))

;; Exercises
(comment
  "Write a function named 'property-formatted' which will take a key (such as ':age'),
   format string with 2 placholders (such as 'Key %s has a value %s') and map
   (such as '{:age 25}') and will return an formatted string with first placeholder
   replaced by key name and second placeholder replaced by key value (such as 'Key :age has a value 25')")


(defn- property-formatted [key format-string language-key m]
  (format format-string key (language-key (key m) )) )

(comment
  "Use the function above to map ingredients into formatted strings such as 'Key :name has a value Kakao'.
   Leverage map to do that, but remember that mapping function (first argument to map) takes only one
   argument but property-formatted takes three arguments, use one argument anonymous function to work
   around that ")

(defn property-formatted-all-ingredients [all-ingredients language-key]
  (map (fn [ingredient]
         (property-formatted :name "Key %s has a value %s" language-key ingredient))
       all-ingredients))

;; takýto ma byt vysledok
(comment
  {:id 1
   :thumbnail-link "images/thumbnails/guacamole.jpg"
   :title "Guacamole"
   :ingredients #{["Avokádo" 4 "Kusy"]}
   :category 2
   :servings 2})

(defn- amounts-from-recipe [recipe all-amounts]
  (filter (fn [amounts]
            (= (:id recipe) (:recipe-id amounts)))
          all-amounts))

(defn- unit-id-from-ingredient-id [ingredient-id recipe all-amounts]
  (filter (fn [recipe-ingredients]
            (= ingredient-id (:ingredient-id recipe-ingredients)))
          (amounts-from-recipe recipe all-amounts)))

(defn- amount-name-from-unit-id [unit-id all-units language-key]
  (map language-key (:names (ff (fn [units]
                                  (= unit-id (:id units)))
                                all-units))))

(defn- fill-units-and-amounts-into-ingredients [recipe all-ingredients all-amounts all-units language-key]
  (map
   (fn [ingredient-id]
     (let [amount-from-id (first (map :amount (unit-id-from-ingredient-id ingredient-id recipe all-amounts)))
           units-from-id (amount-name-from-unit-id (first (map :unit-id (unit-id-from-ingredient-id ingredient-id recipe all-amounts))) all-units language-key)]
       [(name-for-ingredient all-ingredients language-key ingredient-id)
        amount-from-id
        (cond
         (> 2 amount-from-id) (first units-from-id)
         (and (< 1 amount-from-id) (> 5 amount-from-id)) (second units-from-id)
         (> 4 amount-from-id) (last units-from-id)
         :else units-from-id)]))
   (:ingredients recipe)))

(defn populate-recipe [recipe all-ingredients all-amounts all-units language-key]
  (assoc-in recipe [:ingredients]
            (into #{} (fill-units-and-amounts-into-ingredients recipe all-ingredients all-amounts all-units language-key))))

(defn group-and-sort
  "This function takes an sequence-of-maps (as for example '({:name \"Sol\"} {:name \"Syr\"}))
  and groups them according to first letters under specified key (as for example :name).
  It also sort the grouped structure alphabetically at all levels."
  [sequence-of-maps key language-key]
  (->> (map (fn [name]
              (update-in name [key]  language-key))
            sequence-of-maps)
       (group-by-first-letter key)
       (sort-by first)
       (map (juxt first (comp (partial sort-by key) second)))))

(defn recipes-for-selected-category [id-category all-recipes all-ingredients language-key]
  "This function takes a category id and select all recipes containing this category with ingredents names "
  (map (fn [recipe-title]
         (update-in recipe-title [:title]
                    language-key))
       (map (fn [recipe]
              (update-in recipe [:ingredients]
                         #(into #{} (map  (partial name-for-ingredient all-ingredients language-key)  %))))
            (recipes-for-category  id-category all-recipes))))
