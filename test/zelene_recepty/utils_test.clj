(ns zelene-recepty.utils-test
  (:require [clojure.test :refer :all]
            [zelene-recepty.utils :as utils]))

(deftest recipe-data-from-params
  (testing
      "Function should return recipe data in correct form"
    (is (= (utils/recipe-data-from-params [:params
                                           {:category "Sladkosti",
                                            :ingredient_name
                                            ["Jablčný ocot" "Himalájska soľ" "Cuketa"],
                                            :ingredient_amount ["2" "1" "3"],
                                            :recipe-name "Falafel",
                                            :seving-time "30",
                                            :origin "dajanka",
                                            :descrpition " Uvarime a zjeme",
                                            :serving-unit "Porcie",
                                            :ingredient_unit ["Lyžice" "Pohár" "Kusy"],
                                            :serving-amount "4"}])
           {:serving-amount "4",
            :serving-unit "Porcie",
            :descrpition " Uvarime a zjeme",
            :origin "dajanka",
            :seving-time "30",
            :recipe-name "Falafel",
            :ingredient
            [{:name "Jablčný ocot", :amount "2", :unit "Lyžice"}
             {:name "Himalájska soľ", :amount "1", :unit "Pohár"}
             {:name "Cuketa", :amount "3", :unit "Kusy"}], :category "Sladkosti"}))))

(deftest split-and-nest
  (testing
      "Function should splits keyword names in associative structure by specified regexp and create nested structure if needed, existing non-splitable key-val
  mappings are unaffected."
    (is (= (utils/split-and-nest {:ingredient_amount ["2" "1" "3"] :ingredient_name ["Jablčný ocot" "Himalájska soľ" "Cuketa"]} #"_")
           {:ingredient {:amount ["2" "1" "3"], :name ["Jablčný ocot" "Himalájska soľ" "Cuketa"]}}))))

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
