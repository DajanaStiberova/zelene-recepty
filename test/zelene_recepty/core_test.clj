(ns zelene-recepty.core-test
  (:require [clojure.test :refer :all]
            [zelene-recepty.core :as core]))

(deftest name-for-ingredient
  (testing
      "Function should filter ingredients by id, and return name of ingredient"
    (is (= (core/name-for-ingredient
            {1 {:id 1 :name {:sk "Soľ" :en "Salt"}}
             2 {:id 2 :name {:sk "Avokádo" :en "Avocado"}}
             3 {:id 3 :name {:sk "Cesnak" :en "Garlic"}}}  :sk 3)
           "Cesnak"))))

(deftest group-by-first-letter
  (testing
      "Collection should be grouped by uppercase of first letter under specified key"
    (is (= (core/group-by-first-letter :sk :name '({:name {:sk "Avokádo" :en "Avocado"}}
                                                   {:name {:sk "Agáve" :en "Agave"}}
                                                   {:name {:sk "Bazalka" :en "Basil"}}
                                                   {:name {:sk "Brokolica" :en "Broccoli"}}))
           {"A" [{:name {:sk "Avokádo" :en "Avocado"}} {:name {:sk "Agáve" :en "Agave"}}]
            "B" [{:name {:sk "Bazalka" :en "Basil"}} {:name {:sk "Brokolica" :en "Broccoli"}}]}))))

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
           '([1 {:id 1,
                 :thumbnail-link "images/thumbnails/guacamole.jpg",
                 :title {:sk "Guacamole" :en "Guacamole"}
                 :ingredients #{1 4 6 3 2 5},
                 :category 2}])))))

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
           '([1 {:id 1,
                 :thumbnail-link "images/thumbnails/guacamole.jpg",
                 :title {:sk "Guacamole" :en "Guacamole"}
                 :ingredients #{1 4 6 3 2 5},
                 :category 2}])))))

(deftest property-formatted-all-ingredients
  (testing
      "Function takes ingredients and put them into string which is defined in function"
    (is (= (core/property-formatted-all-ingredients 
            {1 {:id 1 :name {:sk "Soľ" :en "Salt"}}
             2 {:id 2 :name {:sk "Avokádo" :en "Avocado"}}
             3 {:id 3 :name {:sk "Cesnak" :en "Garlic"}}} :sk)
           '("Key :name has a value Soľ"
             "Key :name has a value Cesnak"
             "Key :name has a value Avokádo"
             ) ))))

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
            (vals {1 {:id 2 :name {:sk "Avokádo" :en "Avocado"}}
                   2 {:id 10 :name {:sk "Agáve" :en "Agave"}}
                   3 {:id 3 :name {:sk "Cesnak" :en "Garlic"}}}) :name :sk)
           '(["A" ({:id 10, :name {:sk "Agáve" :en "Agave"}}
                   {:id 2, :name {:sk "Avokádo" :en "Avocado"}})]
               ["C" ({:id 3, :name {:sk "Cesnak" :en "Garlic"}})])))))

(deftest recipes-for-selected-category
  (testing
      "Recipes should be filtered by selected category with filled ingredients names"
    (is (= (core/recipes-for-selected-category 2
                                               {1 {:id 1
                                                  :thumbnail-link "images/thumbnails/guacamole.jpg"
                                                  :title {:sk "Guacamole" :en "Guacamole"}
                                                  :ingredients #{2 3 1}
                                                 :category 2}
                                                2 {:id 2
                                                 :thumbnail-link "images/thumbnails/choco-mint.jpg"
                                                 :title {:sk "Mätové toliariky" :en "Chocolate mints"}
                                                 :ingredients #{7 8 9 1 10 11}
                                                 :category 4}}
                                               {1 {:id 1 :name {:sk "Soľ" :en "Salt"}}
                                                2 {:id 2 :name {:sk "Avokádo" :en "Avocado"}}
                                                3 {:id 3 :name {:sk "Cesnak" :en "Garlic"}}} :sk )
           '({:id 1
              :thumbnail-link "images/thumbnails/guacamole.jpg"
              :title  "Guacamole"
              :ingredients #{"Avokádo" "Cesnak" "Soľ"}
              :category 2})))))
