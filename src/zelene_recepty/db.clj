(ns zelene-recepty.db
  (:require [clojure.string :as str]
            [clojure.java.jdbc :as j]
            [yesql.core :refer [defquery]]))

(def zelene-recepty-db {:classname "org.postgresql.Driver"
                        :subprotocol "postgresql"
                        :subname "//127.0.0.1:5432/zelenerecepty"
                        :user "dajanka"
                        :password "zelenerecepty"})

(defquery categories "queries/categories.sql")
(defquery all-thumbnails  "queries/all_thumbnails.sql")
(defquery thumbnails-for-category  "queries/thumbnails_for_category.sql")
(defquery ingredients-for-recipe  "queries/ingredients_for_recipe.sql")
(defquery ingredient-names "queries/ingredient_name_from_ingredient_id.sql")
(defquery recipes-ids-for-ingredient "queries/recipes_ids_for_ingredient.sql")
(defquery thumbnail-for-recipe  "queries/thumbnail_for_recipe.sql")
(defquery list-of-all-ingredients  "queries/ingredients_list.sql")
(defquery list-of-all-recipes  "queries/recipes_list.sql")
(defquery recipe  "queries/recipe.sql")
(defquery images-for-recipe  "queries/images_for_recipe.sql")
(defquery amounts-and-units-for-ingredients-in-recipe  "queries/amounts_and_units_for_ingredients_in_recipe.sql")




(defn split-and-nest
  "Splits keyword names in associative structure by specified regexp
  and creates nested structure if needed, existing non-splitable key-val
  mappings are unaffected."
  [data delimiter]
  (reduce (fn [acc [k v]]
            (let [key-strs (-> k name (str/split delimiter))]
              (assoc-in acc (map keyword key-strs) v)))
          {}
          data))

(defn underscore->hypen
  [data k]
  (if-let [v (get data k)]
    (-> data
        (dissoc k)
        (assoc (-> k name (str/replace #"_" "-") keyword) v))
    data))

(defn categories-menu [db]
  (j/with-db-transaction [conn db]
    (map (fn [category]
           (split-and-nest category #"_"))
         (categories conn))))

(defn proper-form-for-ingredient-amount [{{numerator :numerator denominator :denominator} :amount
                                          {first :first second :second third :third fourth :fourth} :form
                                          :as amount-and-units}]
  (let [amount (/ numerator denominator)]
    (->
     (cond
      (and (> amount 1) (< amount 5)) (assoc amount-and-units :unit-name second)
      (= amount 1) (assoc amount-and-units :unit-name first)
      (> amount 5) (assoc amount-and-units :unit-name third)
      (< amount 1) (assoc amount-and-units :unit-name fourth))
     (dissoc :form)
     (assoc :amount amount))))

(defn proper-form-for-serving-amount [{amount :serving-amount {first :first second :second third :third fourth :fourth} :form :as recipe}]
  (->
   (cond
    (and (> amount 1) (< amount 5)) (assoc-in recipe [:serving-unit] second)
    (= amount 1) (assoc-in recipe [:serving-unit] first)
    (> amount 5) (assoc-in recipe [:serving-unit] third)
    (< amount 1) (assoc-in recipe [:serving-unit] fourth))
   (dissoc :form)
   (assoc :serving_amount amount)))

(defn get-ingredients-with-units-for-recipe [db recipe-id]
  (->> (amounts-and-units-for-ingredients-in-recipe db recipe-id)
       (map (fn [amount-and-units]
              (-> amount-and-units
                  (split-and-nest #"_")
                  proper-form-for-amount)))))

(defn get-recipe [db recipe-id]
  (j/with-db-transaction [conn db]
    (-> (first (recipe conn recipe-id))
        (underscore->hypen :recipe_date)
        (underscore->hypen :preparation_time)
        (underscore->hypen :serving_unit)
        (underscore->hypen :serving_amount)
        (split-and-nest #"_")
        (proper-form-for-serving-amount)
        (assoc :images (->> (images-for-recipe conn recipe-id)
                            (map #(split-and-nest % #"_"))
                            (into #{})))
        (assoc :ingredients (->> (get-ingredients-with-units-for-recipe db recipe-id)
                                 (into #{}))))))

(defn get-all-thumbnails [db]
  (j/with-db-transaction [conn db]
    (->> (all-thumbnails conn)
         (map (fn [{:keys [id] :as recipe}]
                (-> recipe
                    (underscore->hypen :recipe_date)
                    (underscore->hypen :thumbnail_link)
                    (split-and-nest #"_")
                    (assoc :ingredients (->> (ingredients-for-recipe conn id)
                                             (map #(split-and-nest % #"_"))
                                             (into #{}))))))
         doall)))

(defn get-thumbnails-for-category [db category-id]
  (j/with-db-transaction [conn db]
    (->> (thumbnails-for-category conn category-id)
         (map (fn [{:keys [id] :as recipe}]
                (-> recipe
                    (underscore->hypen :recipe_date)
                    (underscore->hypen :thumbnail_link)
                    (split-and-nest #"_")
                    (assoc :ingredients (->> (ingredients-for-recipe conn id)
                                             (map #(split-and-nest % #"_"))
                                             (into #{}))))))
         doall)))

(defn get-thumbnails-for-ingredient [db ingredient-id]
  (j/with-db-transaction [conn db]
    (->> (map (fn [recipe-id]
                (first (thumbnail-for-recipe conn (second (first recipe-id)))))
              (recipes-ids-for-ingredient conn ingredient-id))

         (map (fn [{:keys [id] :as recipe}]
                (-> recipe
                    (underscore->hypen :recipe_date)
                    (underscore->hypen :thumbnail_link)
                    (split-and-nest #"_")
                    (assoc :ingredients (->> (ingredients-for-recipe conn id)
                                             (map #(split-and-nest % #"_"))
                                             (into #{}))))))
         doall)))

(defn get-proper-ingredient-name-from-id [db ingredient-id language]
  (j/with-db-transaction [conn db]
    (->
     (ingredient-names conn ingredient-id)
     first
     (split-and-nest #"_")
     :name
     language)))

(defn get-list-of-all-ingredients [db]
  (j/with-db-transaction [conn db]
    (map (fn [ingredient]
           (split-and-nest ingredient  #"_"))
         (list-of-all-ingredients conn))))

(defn get-list-of-all-recipes [db]
  (j/with-db-transaction [conn db]
    (map (fn [ingredient]
           (split-and-nest ingredient  #"_"))
         (list-of-all-recipes conn))))
