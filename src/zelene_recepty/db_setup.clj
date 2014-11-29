(ns zelene-recepty.db-setup
  (:require [clojure.java.jdbc :as j]
            [zelene-recepty.db :as db]
            [zelene-recepty.data :as data]))

(defn setup-db [database]
  (apply j/insert! database :category
         (->> data/categories
              (sort-by first)
              (map (comp (fn [{link :link {title-sk :sk title-en :en} :title}]
                           {:link link
                            :title_sk title-sk
                            :title_en title-en})
                         second))))

  (apply j/insert! database :unit
         (->> data/units
              (sort-by first)
              (map (comp (fn [{[{form-first-sk :sk form-first-en :en}
                                {form-second-sk :sk form-second-en :en}
                                {form-third-sk :sk form-third-en :en}
                                {form-fourth-sk :sk form-fourth-en :en}] :names}]
                           {:form_first_sk form-first-sk
                            :form_first_en form-first-en
                            :form_second_sk form-second-sk
                            :form_second_en form-second-en
                            :form_third_sk form-third-sk
                            :form_third_en form-third-en
                            :form_fourth_sk form-fourth-sk
                            :form_fourth_en form-fourth-sk})
                         second))))
  (apply j/insert! database :recipe
         (->> data/recipes
              (sort-by first)
              (map (comp (fn [{recipe-date :date thumbnail-link :thumbnail-link
                               {title-sk :sk title-en :en} :title category-id :category
                               {text-sk :sk text-en :en} :text
                               [serving-amount serving-unit] :serving
                               preparation-time :time origin :origin}]
                           {:recipe_date (java.sql.Date. (.getTime recipe-date))
                            :thumbnail_link thumbnail-link
                            :title_sk title-sk
                            :title_en title-en
                            :category_id category-id
                            :text_sk text-sk
                            :text_en text-en
                            :serving_amount serving-amount
                            :serving_unit serving-unit
                            :preparation_time preparation-time
                            :origin origin})
                         second))))
  (apply j/insert! database :image
         (->> data/recipes
              (sort-by first)
              (mapcat (comp (fn [{recipe-id :id
                                  images :images}]
                              (map (fn [{link :link
                                         {name-sk :sk name-en :en} :name}]
                                     {:recipe_id recipe-id
                                      :name_sk name-sk
                                      :name_en name-en
                                      :link link})
                                   images))
                            second))))
  (apply j/insert! database :ingredient
         (->> data/ingredients
              (sort-by first)
              (map (comp (fn [{{name-sk :sk name-en :en} :name}]
                           {:name_sk name-sk
                            :name_en name-en})
                         second))))
  (apply j/insert! database :ingredient_recipe
         (->> data/recipes
              (sort-by first)
              (mapcat (comp (fn [{recipe-id :id ingredients :ingredients}]
                              (map (fn [ingredient-id]
                                     {:recipe_id recipe-id
                                      :ingredient_id ingredient-id})
                                   ingredients))
                            second))))
  (apply j/insert! database :amount
         (->> data/amounts
              (sort-by first)
              (map (comp (fn [{:keys [recipe-id ingredient-id unit-id amount]}]
                           (let [amount-numerator (if (= clojure.lang.Ratio (class amount))
                                                    (numerator amount)
                                                    amount)
                                 amount-denominator (if (= clojure.lang.Ratio (class amount))
                                                      (denominator amount)
                                                      1)]
                             {:recipe_id recipe-id
                              :ingredient_id ingredient-id
                              :unit_id unit-id
                              :amount_numerator (long amount-numerator)
                              :amount_denominator (long amount-denominator)}))
                         second)))))
