(ns zelene-recepty.web
  (:require [clojure.string :as string]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.resource :as resource]
            [ring.middleware.content-type :as content-type]
            [ring.middleware.not-modified :as not-modified]
            [zelene-recepty.middleware :as middleware]
            [zelene-recepty.core :as core]
            [zelene-recepty.data :as data]
            [zelene-recepty.view :as view]
            [zelene-recepty.time :as time]
            [zelene-recepty.file-input :as file-input]))

(defn- maybe-param [param default]
  (or (and param (read-string param)) default))

(defn- language-link [url lang]
  (format "%s?lang=%s" url (if (= lang :sk) "en" "sk")))

(defn- list-of-categories
  [current-language]
  (map (comp (fn [category]
               (-> category
                   (update-in [:title] current-language)
                   (update-in [:link] #(format "%s?lang=%s#hr" % (name current-language)))))
             second)
       data/categories))

(defn not-found [{:keys [lang] :as request}]
  {:status 404
   :body (apply str (view/not-found-template (lang {:sk "Stránku sa bohužiaľ nepodarilo nájsť"
                                                    :en "Sorry, this page is not available"})
                                             (lang {:sk "images/en-logo-mini.png"
                                                    :en "images/sk-logo-mini.png"})
                                             (list-of-categories lang)
                                             (language-link "/not-found" lang)))})

(defn- update-recipe [recipe ingredients amounts units lang]
  (-> recipe
      (core/populate-recipe ingredients amounts units lang)
      (update-in [:date] time/format-date)
      (update-in [:time] (fn [time]
                           (core/fill-hours-and-mins time)))))

(defn- lists [template title all-data key language language-link]
  (template
   (language title)
   (language {:sk "images/en-logo-mini.png" :en "images/sk-logo-mini.png"})
   language-link
   (core/group-and-sort (vals all-data) [key language])
   [key language]
   (list-of-categories language)
   (language {:sk "RAW Vegan Kuchárka" :en "RAW Vegan CookBook"})
   (language {:sk "Zelené recepty" :en"Green recipes"})
   (name language)))

(defn- category-handler [category-id recipes {:keys [lang] :as request}]
  (let [{:keys [title link]} (get data/categories category-id)]
    {:status 200
     :body (apply str (view/main-template
                       (lang {:sk "Recept" :en "Recipe"})
                       (core/update-recipes recipes
                                            data/ingredients lang)
                       (list-of-categories lang)
                       7
                       (lang title)
                       (lang {:sk "RAW Vegan Kuchárka" :en "RAW Vegan CookBook"})
                       (lang {:sk "images/hore.png"  :en "images/up.png"})
                       (lang {:sk "images/en-logo-mini.png" :en "images/sk-logo-mini.png"})
                       (language-link link lang)
                       (lang {:sk "Zelené recepty" :en"Green recipes"})
                       (name lang)))}))

(def routing-map {"/home" (partial category-handler 1 (vals data/recipes))

                  "/main-dishes" (partial category-handler 2 (core/recipes-for-category 2 data/recipes))

                  "/spreads" (partial category-handler 3 (core/recipes-for-category 3 data/recipes))

                  "/sweets" (partial category-handler 4 (core/recipes-for-category 4 data/recipes))

                  "/drinks" (partial category-handler 5 (core/recipes-for-category 5 data/recipes))

                  "/list-of-ingredients" (fn [{:keys [lang] :as request}]
                                           {:status 200
                                            :body (apply str (lists view/ingredients-template
                                                                    {:sk "Zoznam surovín" :en "List of ingredients"}
                                                                    data/ingredients
                                                                    :name
                                                                    lang
                                                                    (language-link "/list-of-ingredients" lang)))})

                  "/list-of-recipes" (fn [{:keys [lang] :as request}]
                                       {:status 200
                                        :body (apply str (lists view/recipes-template
                                                                {:sk "Zoznam receptov" :en "List of recipes"}
                                                                data/recipes
                                                                :title
                                                                lang
                                                                (language-link "/list-of-recipes" lang)))})

                  "/recipe" (fn [{:keys [lang] :as request}]
                              (let [recipe-id (-> request :params :Id (maybe-param 0))]
                                {:status 200
                                 :body (apply str (view/recipe-template
                                                   (update-recipe (get data/recipes recipe-id) data/ingredients data/amounts data/units lang)
                                                   lang
                                                   (lang {:en "Ingredients" :sk "Ingrediencie"})
                                                   (lang {:en "Method" :sk "Postup"})
                                                   (file-input/recipe-text (-> (get data/recipes recipe-id) :text lang))
                                                   (lang {:sk "Porcie" :en "Serving"})
                                                   (lang {:sk "Čas" :en "Time"})
                                                   (lang {:sk "Zdroj:" :en "Origin:"})))}))

                  "/recipes" (fn [{:keys [lang] :as request}]
                               (let [ingredient-id (-> request :params :ingredientId (maybe-param 0))]
                                 {:status 200
                                  :body (apply str (view/main-template
                                                    (lang {:sk "Recept" :en "Recipe"})
                                                    (core/update-recipes (core/recipes-for-ingredient ingredient-id data/recipes)
                                                                         data/ingredients lang)
                                                    (list-of-categories lang)
                                                    7
                                                    (core/name-for-ingredient data/ingredients lang ingredient-id)
                                                    (lang {:sk "RAW Vegan Kuchárka" :en "RAW Vegan CookBook"})
                                                    (lang {:sk "images/hore.png"  :en "images/up.png"})
                                                    (lang {:sk "images/en-logo-mini.png" :en "images/sk-logo-mini.png"})
                                                    (language-link "/recipes" lang)
                                                    (lang {:sk "Zelené recepty" :en "Green recipes"})
                                                    (name lang)))}))})

(defn router [request]
  (let [request-fn (get routing-map (:uri request) not-found)]
    (request-fn request)))

(def handler (-> router
                 middleware/wrap-language
                 middleware/wrap-params
                 middleware/wrap-html-response
                 (resource/wrap-resource "public")
                 content-type/wrap-content-type
                 not-modified/wrap-not-modified))

(defonce server (jetty/run-jetty #'handler {:port 3000
                                            :join? false}))
