(ns zelene-recepty.core
  (:require [clojure.string :as string]))

(defn list-of-categories
  "TODO"
  [data-map current-language]
  (map (fn [[_ entry]]
         (update-in entry [:title] current-language))
       data-map))

(defn name-for-ingredient
  "TODO"
  [all-ingredients language-key ingredient-key]
  (language-key (:name (get all-ingredients ingredient-key))))

(defn recipes-for-ingredient
  "TODO"
  [ingredient-key all-recipes]
  (->> all-recipes
       vals
       (filter (comp #(contains? % ingredient-key) :ingredients))))

(defn recipes-for-category
  "TODO"
  [category-key all-recipes]
  (->> all-recipes
       vals
       (filter (comp (partial = category-key) :category))))

(defn- get-proper-word-form [{[first-form second-form third-form] :names} amount]
  (cond
   (> 2 amount) first-form
   (and (< 1 amount) (> 5 amount)) second-form
   (< 4 amount) third-form))

(defn- map-into-set [mapping-fn]
  (comp (partial into #{})
        (partial map mapping-fn)))

(defn populate-recipe
  "TODO"
  [{recipe-id :id :as recipe-map} all-ingredients all-amounts all-units language-key]
  (update-in recipe-map [:ingredients]
             (map-into-set (fn [ingredient-id]
                             (let [{:keys [amount unit-id]} (get all-amounts [recipe-id ingredient-id])]
                               [(name-for-ingredient all-ingredients language-key ingredient-id)
                                amount
                                (language-key (get-proper-word-form (get all-units unit-id) amount))])))))

(defn- group-by-first-letter [ks seq]
  (group-by (comp string/upper-case str first #(get-in % ks)) seq))

(defn group-and-sort
  "This function takes an sequence-of-maps (as for example '({:name {:sk \"Sol\" :en \"Salt\"}} {:name {:sk \"Syr\" :en \"Cheese\"}}))
  and groups them according to first letters under specified ks (as for example [:name :sk]).
  It also sort the grouped structure alphabetically at all levels."
  [sequence-of-maps ks]
  (->> (group-by-first-letter ks sequence-of-maps)
       (sort-by first)
       (map (juxt first (comp (partial sort-by #(get-in % ks)) second)))))

(defn update-recipes
  "TODO"
  [recipes all-ingredients language-key]
  (map  #(-> %
             (update-in [:title] language-key)
             (update-in [:ingredients] (map-into-set (partial name-for-ingredient all-ingredients language-key))))
        recipes))
