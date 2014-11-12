(ns zelene-recepty.core-test
  (:require [clojure.test :refer :all]
            [zelene-recepty.core :as core]))

(deftest list-of-categories
  (testing
      "Function should select current language in title"
    (is (= (core/list-of-categories {1 {:id 1
                                        :title {:sk "Najnovšie recepty" :en "Newest recipes"}
                                        :link :home#hr}
                                     2 {:id 2
                                        :title {:sk "Hlavné jedlá" :en "Main dishes"}
                                        :link :main-dishes#hr}} :sk)
           '({:title "Najnovšie recepty", :link :home#hr, :id 1} {:title "Hlavné jedlá", :link :main-dishes#hr, :id 2})))))

(deftest name-for-ingredient
  (testing
      "Function should filter ingredients by id, and return name of ingredient"
    (is (= (core/name-for-ingredient
            {1 {:id 1 :name {:sk "Soľ" :en "Salt"}}
             2 {:id 2 :name {:sk "Avokádo" :en "Avocado"}}
             3 {:id 3 :name {:sk "Cesnak" :en "Garlic"}}}  :sk 3)
           "Cesnak"))))

(deftest recipes-for-ingredient
  (testing
      "Recipes should be filtered by selected ingredient-id"
    (is (= (core/recipes-for-ingredient 2
                                        {1 {:id 1
                                            :thumbnail-link "images/thumbnails/guacamole.jpg"
                                            :title {:sk "Guacamole" :en "Guacamole"}
                                            :ingredients #{2 3 1 4 5 6}
                                            :category 2}
                                         2 {:id 2
                                            :thumbnail-link "images/thumbnails/choco-mint.jpg"
                                            :title {:sk "Mätové toliariky" :en "Chocolate mints"}
                                            :ingredients #{7 8 9 1 10 11}
                                            :category 4}})
           '({:id 1,
              :thumbnail-link "images/thumbnails/guacamole.jpg",
              :title {:sk "Guacamole" :en "Guacamole"}
              :ingredients #{1 4 6 3 2 5},
              :category 2})))))

(deftest recipes-for-category
  (testing
      "Recipes should be filtered by selected category"
    (is (= (core/recipes-for-category 2
                                      {1 {:id 1
                                          :thumbnail-link "images/thumbnails/guacamole.jpg"
                                          :title {:sk "Guacamole" :en "Guacamole"}
                                          :ingredients #{2 3 1 4 5 6}
                                          :category 2}
                                       2 {:id 2
                                          :thumbnail-link "images/thumbnails/choco-mint.jpg"
                                          :title {:sk "Mätové toliariky" :en "Chocolate mints"}
                                          :ingredients #{7 8 9 1 10 11}
                                          :category 4}})
           '({:id 1,
              :thumbnail-link "images/thumbnails/guacamole.jpg",
              :title {:sk "Guacamole" :en "Guacamole"}
              :ingredients #{1 4 6 3 2 5},
              :category 2})))))

(deftest populate-recipe
  (testing
      "Units and amounts should be added to recipe"
    (is (= (core/populate-recipe [1 {:id 1,
                                     :thumbnail-link "images/thumbnails/guacamole.jpg",
                                     :title "Guacamole",
                                     :ingredients #{1 3 2},
                                     :category 2}]
                                 {1 {:id 1 :name {:sk "Soľ" :en "Salt"}}
                                  2 {:id 2 :name {:sk "Avokádo" :en "Avocado"}}
                                  3 {:id 3 :name {:sk "Cesnak" :en "Garlic"}}}
                                 {[1 2] {:recipe-id 1 :ingredient-id 2 :unit-id 6 :amount 4}
                                  [1 3] {:recipe-id 1 :ingredient-id 3 :unit-id 7 :amount 4}
                                  [1 1] {:recipe-id 1 :ingredient-id 1 :unit-id 5 :amount 1}}
                                 {5 {:id 5 :names
                                     [{:sk "Čajová lyžička" :en "Teaspoon"}
                                      {:sk "Čajové lyžičky" :en "Teaspoons"}
                                      {:sk "Čajových lyžičiek" :en "Teaspoons"}]}
                                  6 {:id 6 :names
                                     [{:sk "Kus" :en "Piece"}
                                      {:sk "Kusy" :en "Pieces"}
                                      {:sk "Kusov" :en "Pieces"}]}
                                  7 {:id 7 :names
                                     [{:sk "Strúčik" :en "Clove" }
                                      {:sk "Strúčiky" :en "Cloves"}
                                      {:sk "Strúčikov" :en "Cloves"}]}}
                                 :sk)
           {:category 2,
            :title "Guacamole",
            :thumbnail-link "images/thumbnails/guacamole.jpg",
            :ingredients #{["Avokádo" 4 "Kusy"] ["Cesnak" 4 "Strúčiky"] ["Soľ" 1 "Čajová lyžička"]},
            :id 1}))))

(deftest group-and-sort
  (testing
      "Maps should be grouped by first letter under key and then sorted alphabetically"
    (is (= (core/group-and-sort
            '({:id 2 :name {:sk "Avokádo" :en "Avocado"}}
              {:id 10 :name {:sk "Agáve" :en "Agave"}}
              {:id 3 :name {:sk "Cesnak" :en "Garlic"}}) [:name :sk])
           '(["A" ({:id 10, :name {:sk "Agáve" :en "Agave"}}
                   {:id 2, :name {:sk "Avokádo" :en "Avocado"}})]
               ["C" ({:id 3, :name {:sk "Cesnak" :en "Garlic"}})])))))

(deftest update-recipes
  (testing
      "Function should fill ingredient names eith current language into ingredients and select title with current language"
    (is (= (core/update-recipes '({:id 1
                                  :thumbnail-link "images/thumbnails/guacamole.jpg"
                                  :title {:sk "Guacamole" :en "Guacamole"}
                                  :ingredients #{2 3 1}
                                  :category 2})
                               {1 {:id 1 :name {:sk "Soľ" :en "Salt"}}
                                2 {:id 2 :name {:sk "Avokádo" :en "Avocado"}}
                                3 {:id 3 :name {:sk "Cesnak" :en "Garlic"}}} :sk)
           '({:id 1, :thumbnail-link "images/thumbnails/guacamole.jpg", :title "Guacamole", :ingredients #{"Avokádo" "Cesnak" "Soľ"}, :category 2})))))
