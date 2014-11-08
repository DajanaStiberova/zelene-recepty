(ns zelene-recepty.core
  (:require [zelene-recepty.data :as data]
            [clojure.string :as string]))

(def guacamole (second data/recipes))

(defn list-of-categories [all-catedories current-language]
  (map (fn [[category-key category]]
           (update-in category [:title] current-language))
         data/categories))

(defn name-for-ingredient [all-ingredients language-key ingredient-key]
  (language-key (:name (get all-ingredients ingredient-key))))

(defn group-by-first-letter [language-key key seq]
  "Map is grouped by uppercase of first letter under specified key maps"
  (group-by (comp string/upper-case str first language-key key) seq))

(defn recipes-for-ingredient [ingredient-key all-recipes]
  (filter (fn [[recipe-key recipe]]
            (contains? (:ingredients recipe) ingredient-key))
          all-recipes))

(defn recipes-for-category [category-key all-recipes]
  (filter (fn [[recipes-key recipe]]
            (= category-key (:category recipe)))
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
       (vals all-ingredients)))

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
            (= (first recipe) (first (key amounts))))
          all-amounts))

(defn- unit-id-from-ingredient-id [ingredient-key recipe all-amounts]
  (filter (fn [[key recipe-ingredients]]
            (= ingredient-key (:ingredient-id recipe-ingredients)))
          (amounts-from-recipe recipe all-amounts)))

(defn- amount-name-from-unit-id [unit-id all-units language-key]
  (map language-key (:names (get all-units unit-id))))

(defn- fill-units-and-amounts-into-ingredients [recipe all-ingredients all-amounts all-units language-key]
  (map
   (fn [ingredient-id]
     (let [amount-from-id (:amount (second (first (unit-id-from-ingredient-id ingredient-id recipe all-amounts))))
           units-from-id (amount-name-from-unit-id (:unit-id (second (first (unit-id-from-ingredient-id ingredient-id recipe all-amounts)))) all-units language-key)]
       [(name-for-ingredient all-ingredients language-key ingredient-id)
        amount-from-id
        (cond
         (> 2 amount-from-id) (first units-from-id)
         (and (< 1 amount-from-id) (> 5 amount-from-id)) (second units-from-id)
         (> 4 amount-from-id) (last units-from-id)
         :else units-from-id)]))
   (:ingredients (second recipe))))

(defn populate-recipe [recipe all-ingredients all-amounts all-units language-key]
  (assoc-in (second recipe) [:ingredients]
            (into #{} (fill-units-and-amounts-into-ingredients recipe all-ingredients all-amounts all-units language-key))))

(defn group-and-sort
  "This function takes an sequence-of-maps (as for example '({:name \"Sol\"} {:name \"Syr\"}))
  and groups them according to first letters under specified key (as for example :name).
  It also sort the grouped structure alphabetically at all levels."
  [sequence-of-maps key language-key]
  (->> (group-by-first-letter language-key key sequence-of-maps)
       (sort-by first)
       (map (juxt first (comp (partial sort-by (comp language-key key)) second)))))

(defn recipes-for-selected-category [id-category all-recipes all-ingredients language-key]
  "This function takes a category id and select all recipes containing this category with ingredents names "
  (map (fn [recipe-title]
         (update-in recipe-title [:title]
                    language-key))
       (map (fn [recipe]
              (update-in recipe [:ingredients]
                         #(into #{} (map  (partial name-for-ingredient all-ingredients language-key)  %))))
            (vals (recipes-for-category id-category all-recipes)))))
