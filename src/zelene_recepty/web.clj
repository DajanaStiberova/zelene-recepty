(ns zelene-recepty.web
  (:require [clojure.string :as string]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.resource :as resource]
            [ring.middleware.content-type :as content-type]
            [ring.middleware.not-modified :as not-modified]
            [ring.middleware.session :as session]
            [zelene-recepty.middleware :as middleware]
            [zelene-recepty.core :as core]
            [zelene-recepty.data :as data]
            [zelene-recepty.view :as view]
            [zelene-recepty.time :as time]))

(def current-language :sk)

(defn not-found [request]
  {:status 404
   :body (apply str (view/not-found-template (current-language {:sk "Stránka nenájdená"
                                                                :en "Sorry, this page is not available"})
                                             (current-language {:sk "images/en-logo-mini.png"
                                                                :en "images/sk-logo-mini.png"})
                                             (map (comp #(update-in % [:title] current-language) second)
                                                         data/categories)
                                             "language"))})

(defn- maybe-param [param default]
  (or (and param (read-string param)) default))

(defn- update-recipe [recipe]
  (-> recipe
      (update-in [:date] time/format-date)
      (update-in [:time] (fn [time]
                           (format "%s min" time)))))


(defn- view-main-template [id-category title language language-link]
  (view/main-template
   (language {:sk "Recept" :en "Recipe"})
   (core/update-recipes (core/recipes-for-category id-category data/recipes)
                        data/ingredients language)
   (core/list-of-categories data/categories language)
   7
   (language title)
   (language {:sk "RAW Vegan Kuchárka" :en "RAW Vegan CookBook"})
   (language {:sk "images/hore.png"  :en "images/up.png"})
   (language {:sk "images/en-logo-mini.png" :en "images/sk-logo-mini.png"})
   language-link
   (language {:sk "Zelené recepty" :en"Green recipes"})))

(defn- home-page [title language language-link]
  (view/main-template
   (language {:sk "Recept" :en "Recipe"})
   (map (fn [recipe-title]
          (update-in recipe-title [:title]
                     language))
        (map (fn [[recipe-key recipe]]
               (update-in recipe [:ingredients]
                          #(map  (partial core/name-for-ingredient data/ingredients language) % )))
             data/recipes))
   (core/list-of-categories data/categories language)
   7
   (language title)
   (language {:sk "RAW Vegan Kuchárka" :en "RAW Vegan CookBook"})
   (language {:sk "images/hore.png"  :en "images/up.png"})
   (language {:sk "images/en-logo-mini.png" :en "images/sk-logo-mini.png"})
   language-link
   (language {:sk "Zelené recepty" :en"Green recipes"})))

(defn- lists [template title all-data key language language-link]
  (template
   (language title)
   (language {:sk "images/en-logo-mini.png" :en "images/sk-logo-mini.png"})
   language-link
   (core/group-and-sort (vals all-data) [key language])
   [key language]
   (core/list-of-categories data/categories language)
   (language {:sk "RAW Vegan Kuchárka" :en "RAW Vegan CookBook"})
   (language {:sk "Zelené recepty" :en"Green recipes"})))

(def visitors (atom {}))

(def routing-map {"/home" (fn [request]
                            {:status 200
                             :body (apply str (home-page
                                               {:sk "Najnovšie recepty" :en "Newest recipes"} current-language "language"))})
                  "/main-dishes" (fn [request]
                                   {:status 200
                                    :body (apply str (view-main-template 2 {:sk "Hlavné jedlá" :en "Main dishes"} current-language "language"))})
                  "/spreads" (fn [request]
                               {:status 200
                                :body (apply str (view-main-template  3
                                                                      {:sk "Nátierky" :en "Spreads"} current-language "language"))})
                  "/sweets" (fn [request]
                              {:status 200
                               :body (apply str (view-main-template 4
                                                                    {:sk "Sladkosti" :en "Sweets"} current-language "language"))})
                  "/drinks" (fn [request]
                              {:status 200
                               :body (apply str (view-main-template 5
                                                                    {:sk "Nápoje" :en "Drinks"} current-language "language"))})

                  "/list-of-ingredients" (fn [request]
                                           {:status 200
                                            :body (apply str (lists view/ingredients-template
                                                                    {:sk "Zoznam surovín" :en "List of ingredients"}
                                                                    data/ingredients
                                                                    :name
                                                                    current-language
                                                                    "language"))})
                  "/list-of-recipes" (fn [request]
                                       {:status 200
                                        :body (apply str (lists view/recipes-template
                                                                {:sk "Zoznam receptov" :en "List of recipes"}
                                                                data/recipes
                                                                :title
                                                                current-language
                                                                "language"))})


                  "/recipe" (fn [request]
                              (let [recipe-id (-> request :params :Id (maybe-param 0))]
                                {:status 200
                                 :body (apply str (view/recipe-template
                                                   (update-recipe (get data/recipes recipe-id))
                                                   (vec (:ingredients (core/populate-recipe (get data/recipes recipe-id)
                                                                                            data/ingredients
                                                                                            data/amounts
                                                                                            data/units
                                                                                            current-language)))
                                                   current-language
                                                   (current-language {:en "Ingredients" :sk "Ingrediencie"})
                                                   (current-language {:en "Method" :sk "Postup"})
                                                   (data/recipe-text recipe-id current-language)
                                                   (current-language {:sk "Porcie" :en "Serving"})
                                                   (current-language {:sk "Čas" :en "Time"})
                                                   (current-language {:sk "Zdroj:" :en "Origin:"})))}))

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
                                                    "language"
                                                    (current-language {:sk "Zelené recepty" :en "Green recipes"})))}))

                  "/visitors" (fn [request]
                                (let [visitor-name (or (-> request :params :name) "Anonym")]
                                  {:status 200
                                   :body (str "<h1>" (get (swap! visitors update-in [visitor-name] (fnil inc 0))
                                                          visitor-name)
                                              "</h1>")}))})

(defn router [{:keys [session] :as request}]
  (let [request-fn (get routing-map (:uri request) not-found)]
    (request-fn request)))

(def handler (-> router
                 middleware/wrap-params
                 middleware/wrap-html-response
                 session/wrap-session
                 (resource/wrap-resource "public")
                 content-type/wrap-content-type
                 not-modified/wrap-not-modified))

(defonce server (jetty/run-jetty #'handler {:port 3000
                                            :join? false}))
