(ns zelene-recepty.db
  (:require [zelene-recepty.utils :as utils]
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
(defquery all-units  "queries/all_from_unit.sql")
(defquery recipe  "queries/recipe.sql")
(defquery images-for-recipe  "queries/images_for_recipe.sql")
(defquery amounts-and-units-for-ingredients-in-recipe  "queries/amounts_and_units_for_ingredients_in_recipe.sql")


(defn categories-menu [db]
  (j/with-db-transaction [conn db]
    (map (fn [category]
           (utils/split-and-nest category #"_"))
         (categories conn))))

(defn proper-form-for-amount [{amount :amount
                               {first :first second :second third :third fourth :fourth} :form
                               :as data}]
  (->
   (cond
    (and (> amount 1) (< amount 5)) (assoc data :unit-name second)
    (= amount 1) (assoc data :unit-name first)
    (> amount 4) (assoc data :unit-name third)
    (< amount 1) (assoc data :unit-name fourth))
   (dissoc :form)
   (assoc :amount amount)))

(defn get-ingredients-with-units-for-recipe [db recipe-id]
  (->> (amounts-and-units-for-ingredients-in-recipe db recipe-id)
       (map (fn [amount-and-units]
              (-> amount-and-units
                  (utils/split-and-nest #"_")
                  (update-in [:amount] (fn [{:keys [numerator denominator]}]
                                         (/ numerator denominator)))
                  proper-form-for-amount)))))

(defn get-recipe [db recipe-id]
  (j/with-db-transaction [conn db]
    (-> (first (recipe conn recipe-id))
        (utils/underscore->hypen :recipe_date)
        (utils/underscore->hypen :preparation_time)
        (utils/split-and-nest #"_")
        (update-in [:serving] proper-form-for-amount)
        (assoc :images (->> (images-for-recipe conn recipe-id)
                            (map #(utils/split-and-nest % #"_"))
                            (into #{})))
        (assoc :ingredients (->> (get-ingredients-with-units-for-recipe conn recipe-id)
                                 (into #{}))))))

(defn get-all-thumbnails [db]
  (j/with-db-transaction [conn db]
    (->> (all-thumbnails conn)
         (map (fn [{:keys [id] :as recipe}]
                (-> recipe
                    (utils/underscore->hypen :recipe_date)
                    (utils/underscore->hypen :thumbnail_link)
                    (utils/split-and-nest #"_")
                    (assoc :ingredients (->> (ingredients-for-recipe conn id)
                                             (map #(utils/split-and-nest % #"_"))
                                             (into #{}))))))
         doall)))

(defn get-thumbnails-for-category [db category-id]
  (j/with-db-transaction [conn db]
    (->> (thumbnails-for-category conn category-id)
         (map (fn [{:keys [id] :as recipe}]
                (-> recipe
                    (utils/underscore->hypen :recipe_date)
                    (utils/underscore->hypen :thumbnail_link)
                    (utils/split-and-nest #"_")
                    (assoc :ingredients (->> (ingredients-for-recipe conn id)
                                             (map #(utils/split-and-nest % #"_"))
                                             (into #{}))))))
         doall)))

(defn get-thumbnails-for-ingredient [db ingredient-id]
  (j/with-db-transaction [conn db]
    (->> (map (fn [recipe-id]
                (first (thumbnail-for-recipe conn (second (first recipe-id)))))
              (recipes-ids-for-ingredient conn ingredient-id))

         (map (fn [{:keys [id] :as recipe}]
                (-> recipe
                    (utils/underscore->hypen :recipe_date)
                    (utils/underscore->hypen :thumbnail_link)
                    (utils/split-and-nest #"_")
                    (assoc :ingredients (->> (ingredients-for-recipe conn id)
                                             (map #(utils/split-and-nest % #"_"))
                                             (into #{}))))))
         doall)))

(defn get-proper-ingredient-name-from-id [db ingredient-id language]
  (j/with-db-transaction [conn db]
    (->
     (ingredient-names conn ingredient-id)
     first
     (utils/split-and-nest #"_")
     :name
     language)))

(defn get-list-of-all-ingredients [db]
  (j/with-db-transaction [conn db]
    (map (fn [ingredient]
           (utils/split-and-nest ingredient  #"_"))
         (list-of-all-ingredients conn))))

(defn get-list-of-all-recipes [db]
  (j/with-db-transaction [conn db]
    (map (fn [ingredient]
           (utils/split-and-nest ingredient  #"_"))
         (list-of-all-recipes conn))))

(defn get-list-of-all-units [db]
  (j/with-db-transaction [conn db]
    (map (fn [unit]
           (utils/split-and-nest unit #"_"))
         (all-units conn))))

;;(defn save-new-recipe! [db ])


