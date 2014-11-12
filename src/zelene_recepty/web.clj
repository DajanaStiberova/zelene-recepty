(ns zelene-recepty.web
  (:require [clojure.string :as string]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.resource :as resource]
            [ring.middleware.content-type :as content-type]
            [ring.middleware.not-modified :as not-modified]
            [zelene-recepty.middleware :as middleware]
            [zelene-recepty.core :as core]
            [zelene-recepty.data :as data]
            [zelene-recepty.view :as view]))

(def current-language :sk)

(defn not-found [request]
  {:status 404
   :body (apply str (view/not-found-template (current-language {:sk "Stránka nenájdená"
                                                                :en "Sorry, this page is not available"})
                                             (current-language {:sk "images/en-logo-mini.png"
                                                                :en "images/sk-logo-mini.png"})
                                             data/categories))})

(defn- maybe-param [param default]
  (or (and param (read-string param)) default))

(defn- view-main-template [id-category title]
  (view/main-template
   (current-language {:sk "Recept" :en "Recipe"})
   (core/update-recipes (core/recipes-for-category id-category data/recipes)
                        data/ingredients current-language)
   (core/list-of-categories data/categories current-language)
   7
   (current-language title)
   (current-language {:sk "RAW Vegan Kuchárka" :en "RAW Vegan CookBook"})
   (current-language {:sk "images/hore.png"  :en "images/up.png"})
   (current-language {:sk "images/en-logo-mini.png" :en "images/sk-logo-mini.png"})
   (current-language {:sk "Zelené recepty" :en"Green recipes"})))

(defn- home-page [title]
  (view/main-template
   (current-language {:sk "Recept" :en "Recipe"})
   (map (fn [recipe-title]
          (update-in recipe-title [:title]
                     current-language))
        (map (fn [[recipe-key recipe]]
               (update-in recipe [:ingredients]
                          #(map  (partial core/name-for-ingredient data/ingredients current-language) % )))
             data/recipes))
   (core/list-of-categories data/categories current-language)
   7
   (current-language title)
   (current-language {:sk "RAW Vegan Kuchárka" :en "RAW Vegan CookBook"})
   (current-language {:sk "images/hore.png"  :en "images/up.png"})
   (current-language {:sk "images/en-logo-mini.png" :en "images/sk-logo-mini.png"})
   (current-language {:sk "Zelené recepty" :en"Green recipes"})))

(defn- lists [template title all-data key]
  (template
   (current-language title)
   (current-language {:sk "images/en-logo-mini.png" :en "images/sk-logo-mini.png"})
   (core/group-and-sort (vals all-data) [key current-language])
   [key current-language]
   (core/list-of-categories data/categories current-language)
   (current-language {:sk "RAW Vegan Kuchárka" :en "RAW Vegan CookBook"})
   (current-language {:sk "Zelené recepty" :en"Green recipes"})))

(def visitors (atom {}))

(def routing-map {"/home" (fn [request]
                            {:status 200
                             :body (apply str (home-page
                                               {:sk "Najnovšie recepty" :en "Newest recipes"}))})
                  "/main-dishes" (fn [request]
                                   {:status 200
                                    :body (apply str (view-main-template 2 {:sk "Hlavné jedlá" :en "Main dishes"}))})
                  "/spreads" (fn [request]
                               {:status 200
                                :body (apply str (view-main-template  3
                                                                      {:sk "Nátierky" :en "Spreads"}))})
                  "/sweets" (fn [request]
                              {:status 200
                               :body (apply str (view-main-template 4
                                                                    {:sk "Sladkosti" :en "Sweets"}))})
                  "/drinks" (fn [request]
                              {:status 200
                               :body (apply str (view-main-template 5
                                                                    {:sk "Nápoje" :en "Drinks"}))})

                  "/list-of-ingredients" (fn [request]
                                           {:status 200
                                            :body (apply str  (lists view/ingredients-template
                                                                     {:sk "Zoznam surovín" :en "List of ingredients"}
                                                                     data/ingredients
                                                                     :name))})
                  "/list-of-recipes" (fn [request]
                                       {:status 200
                                        :body (apply str (lists view/recipes-template
                                                                {:sk "Zoznam receptov" :en "List of recipes"}
                                                                data/recipes
                                                                :title))})


                  "/recipe" (fn [request]
                              (let [recipe-id (-> request :params :Id (maybe-param 0))]
                                {:status 200
                                 :body (apply str (view/recipe-template
                                                   (current-language (:title (get data/recipes recipe-id)))
                                                   (current-language {:en "Ingredients" :sk "Ingrediencie"})
                                                   (get data/recipes recipe-id)
                                                   current-language
                                                   (current-language {:en "Method" :sk "Postup"})
                                                   (data/recipe-text recipe-id current-language)
                                                   (vec (:ingredients (core/populate-recipe (first (filter (fn [recipe]
                                                                                                             (= recipe-id (first recipe)))
                                                                                                           data/recipes))
                                                                                            data/ingredients data/amounts data/units current-language)))))}))

                  "/recipes" (fn [request]
                               (let [ingredient-id (-> request :params :ingredientId (maybe-param 0))]
                                 {:status 200
                                  :body (apply str (view/main-template
                                                    (current-language {:sk "Recept" :en "Recipe"})
                                                    (core/update-recipes (core/recipes-for-ingredient ingredient-id data/recipes)
                                                                         data/ingredients current-language)
                                                    (map (comp #(update-in % [:title] current-language) second)
                                                         data/categories)
                                                    7
                                                    (core/name-for-ingredient data/ingredients current-language ingredient-id)
                                                    (current-language {:sk "RAW Vegan Kuchárka" :en "RAW Vegan CookBook"})
                                                    (current-language {:sk "images/hore.png"  :en "images/up.png"})
                                                    (current-language {:sk "images/en-logo-mini.png" :en "images/sk-logo-mini.png"})
                                                    (current-language {:sk "Zelené recepty" :en"Green recipes"})))}))

                  "/visitors" (fn [request]
                                (let [visitor-name (or (-> request :params :name) "Anonym")]
                                  {:status 200
                                   :body (str "<h1>" (get (swap! visitors update-in [visitor-name] (fnil inc 0))
                                                          visitor-name)
                                              "</h1>")}))})

(defn router [request]
  (let [request-fn (get routing-map (:uri request) not-found)]
    (request-fn request)))

(def handler (-> router
                 middleware/wrap-params
                 middleware/wrap-html-response
                 (resource/wrap-resource "public")
                 content-type/wrap-content-type
                 not-modified/wrap-not-modified))

(defonce server (jetty/run-jetty #'handler {:port 3000
                                            :join? false}))
