(ns zelene-recepty.utils-test
  (:require [clojure.test :refer :all]
            [zelene-recepty.utils :as utils]))

(deftest recipe-data-from-params
  (testing
      "Function should return recipe data in correct form"
    (is (= (utils/recipe-data-from-params  {:category "Sweets"
                                            :ingredient_name ["Avocado" "Cashew" "Persimmon"],
                                            :ingredient_amount ["1" "2" "1"],
                                            :recipe-name "persimmon cake,"
                                            :seving-time "120"
                                            :origin "Dajanka"
                                            :descrpition "Make persimon cake"
                                            :serving-unit "Servings"
                                            :ingredient_unit ["Piece" "Cups" "Piece"],
                                            :serving-amount "3"})
           {:serving-amount "3",
            :serving-unit "Servings",
            :descrpition "Make persimon cake",
            :origin "Dajanka",
            :seving-time "120",
            :recipe-name "persimmon cake,",
            :ingredient [{:name "Avocado", :amount "1", :unit "Piece"}
                         {:name "Cashew", :amount "2", :unit "Cups"}
                         {:name "Persimmon", :amount "1", :unit "Piece"}], :category "Sweets"})))
  (testing
      "That it doesn't crash on nil"
    (is (= nil (utils/recipe-data-from-params nil))))
  (testing
      "That it doesn't crash on empty map"
    (is (= {} (utils/recipe-data-from-params {})))))

(deftest split-and-nest
  (testing
      "Function should splits keyword names in associative structure by specified regexp and create nested structure if needed, existing non-splitable key-val
  mappings are unaffected."
    (is (= (utils/split-and-nest {:ingredient_amount ["2" "1" "3"] :ingredient_name ["Jablčný ocot" "Himalájska soľ" "Cuketa"]} #"_")
           {:ingredient {:amount ["2" "1" "3"], :name ["Jablčný ocot" "Himalájska soľ" "Cuketa"]}})))
  (testing "That it doesn't crash on nil"
    (is (= nil (utils/split-and-nest nil #"_"))))
  (testing "That it doesn't crash on empty map"
    (is (= {} (utils/split-and-nest {} #"_")))))

(deftest underscore->hypen
  (testing
      "Function should replace underscore-delimiter by dash-delimiter in selected key"
    (is (= (utils/underscore->hypen {:serving_time "30", :origin "dajanka"} :serving_time)
           {:serving-time "30", :origin "dajanka"}))))

(deftest fill-hours-and-mins
  (testing "Number should be divided into hours and mins"
    (is (= (utils/fill-hours-and-mins 150)
           "2 hod 30 min"))))

(deftest group-and-sort
  (testing
      "Maps should be grouped by first letter under key and then sorted alphabetically"
    (is (= (utils/group-and-sort
            '({:id 2 :name {:sk "Avokádo" :en "Avocado"}}
              {:id 10 :name {:sk "Agáve" :en "Agave"}}
              {:id 3 :name {:sk "Cesnak" :en "Garlic"}}) [:name :sk])
           '(["A" ({:id 10, :name {:sk "Agáve" :en "Agave"}}
                   {:id 2, :name {:sk "Avokádo" :en "Avocado"}})]
             ["C" ({:id 3, :name {:sk "Cesnak" :en "Garlic"}})])))))
