(ns zelene-recepty.middleware-test
  (:require [clojure.test :refer :all]
            [zelene-recepty.middleware :as middleware]))

(deftest wrap-params
  (testing "wrap-params middleware should assoc params to request"
    (is (= ((middleware/wrap-params identity)
            {:query-string "name=Twiggy&age=1"})
           {:query-string "name=Twiggy&age=1"
            :params {:name "Twiggy"
                     :age "1"}}))))


(deftest wrap-language
  (testing "wrap-language middleware should assoc default language to request
              if there is no language parameter passed"
    (is (= ((middleware/wrap-language identity)
            {})
           {:lang :sk})))
  (testing "wrap-language middleware should assoc language to request if there
              is an language parameter passed with valid value"
    (is (= ((middleware/wrap-language identity)
            {:params {:lang "en"}})
           {:params {:lang "en"}
            :lang :en})))
  (testing "wrap-language middleware should assoc default language to request
              if there is an language parameter passed with invalid value"
    (is (= ((middleware/wrap-language identity)
            {:params {:lang "hu"}})
           {:params {:lang "hu"}
            :lang :sk}))))
