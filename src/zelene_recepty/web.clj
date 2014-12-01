(ns zelene-recepty.web
  (:require [ring.middleware.resource :as resource]
            [ring.middleware.content-type :as content-type]
            [ring.middleware.not-modified :as not-modified]
            [zelene-recepty.middleware :as middleware]
            [zelene-recepty.utils :as utils]
            [zelene-recepty.db :as db]
            [zelene-recepty.view :as view]
            [zelene-recepty.time :as time]
            [zelene-recepty.file-input :as file-input]))

(defn- maybe-param [param default]
  (or (and param (read-string param)) default))

(defn- language-link [url lang]
  (format "%s?lang=%s" url (if (= lang :sk) "en" "sk")))

(defn- list-of-categories
  [current-language]
  (map (fn [category]
         (-> category
             (update-in [:title] current-language)
             (update-in [:link] #(format "%s?lang=%s#hr" % (name current-language)))))
       (db/categories-menu db/zelene-recepty-db)))

(defn not-found [{:keys [lang] :as request}]
  {:status 404
   :body (view/not-found-template (lang {:sk "Stránku sa bohužiaľ nepodarilo nájsť"
                                         :en "Sorry, this page is not available"})
                                  (lang {:sk "images/en-logo-mini.png"
                                         :en "images/sk-logo-mini.png"})
                                  (list-of-categories lang)
                                  (language-link "/not-found" lang))})

(defn in-construction [{:keys [lang] :as request}]
  {:status 200
   :body (view/in-construction-template (lang {:sk "RAW Vegan Kuchárka"
                                               :en "RAW Vegan Cook Book"})
                                        (lang {:sk "Na mobilnej verzii stránky sa pracuje :)"
                                               :en "Mobile version of website is under construction :)"})
                                        (lang {:sk "images/en-logo-mini.png"
                                               :en "images/sk-logo-mini.png"})
                                        (language-link "/in-construction" lang))})

(defn- update-recipe [recipe lang]
  (-> recipe
      (update-in [:images]
                 (partial map (fn [image]
                                (update-in image [:name] lang))))
      (update-in [:ingredients]
                 (partial map (fn [ingredient]
                                (-> ingredient
                                    (update-in [:unit-name] lang)
                                    (update-in [:name] lang)))))
      (update-in [:title] lang)
      (update-in [:serving] update-in [:unit-name] lang)
      (update-in [:recipe-date] time/format-date)
      (update-in [:preparation-time] (fn [time]
                                       (utils/fill-hours-and-mins time)))
      (update-in [:text] (comp file-input/recipe-text lang))))

(defn- lists [template title all-data key language language-link]
  (template
   (language title)
   (language {:sk "images/en-logo-mini.png" :en "images/sk-logo-mini.png"})
   language-link
   (utils/group-and-sort all-data [key language])
   [key language]
   (list-of-categories language)
   (language {:sk "RAW Vegan Kuchárka" :en "RAW Vegan CookBook"})
   (language {:sk "info@zelenerecepty.sk" :en "info@green-recipes.com"})
   (language {:sk "Zelené recepty" :en"Green recipes"})
   (name language)))

(defn- category-handler [category-id recipes {:keys [lang] :as request}]
  (let [[{:keys [title link]}] (filter (fn [category]
                                         (= (:id category) category-id))
                                       (db/categories-menu db/zelene-recepty-db))]
    {:status 200
     :body (view/main-template
            (lang {:sk "Recept" :en "Recipe"})
            (->> recipes
                 (map (fn [recipe]
                        (-> recipe
                            (update-in [:title] lang)
                            (update-in [:ingredients] (partial map #(get-in % [:name lang])))))))
            (list-of-categories lang)
            6
            (lang title)
            (lang {:sk "RAW Vegan Kuchárka" :en "RAW Vegan CookBook"})
            (lang {:sk "images/hore.png"  :en "images/up.png"})
            (lang {:sk "images/en-logo-mini.png" :en "images/sk-logo-mini.png"})
            (language-link link lang)
            (lang {:sk "Zelené recepty" :en"Green recipes"})
            (lang {:sk "info@zelenerecepty.sk" :en "info@green-recipes.com"})
            (name lang))}))

(def ^:private home-handler (partial category-handler 1 (sort-by :recipe-date (db/get-all-thumbnails db/zelene-recepty-db))))

(def routing-map {"/home" home-handler

                  "/main-dishes" (partial category-handler 2 (db/get-thumbnails-for-category db/zelene-recepty-db 2))

                  "/spreads" (partial category-handler 3 (db/get-thumbnails-for-category db/zelene-recepty-db 3))

                  "/sweets" (partial category-handler 4 (db/get-thumbnails-for-category db/zelene-recepty-db 4))

                  "/drinks" (partial category-handler 5 (db/get-thumbnails-for-category db/zelene-recepty-db 5))

                  "/list-of-ingredients" (fn [{:keys [lang] :as request}]
                                           {:status 200
                                            :body (lists view/ingredients-template
                                                         {:sk "Zoznam surovín" :en "List of ingredients"}
                                                         (db/get-list-of-all-ingredients db/zelene-recepty-db)
                                                         :name
                                                         lang
                                                         (language-link "/list-of-ingredients" lang))})

                  "/list-of-recipes" (fn [{:keys [lang] :as request}]
                                       {:status 200
                                        :body (lists view/recipes-template
                                                     {:sk "Zoznam receptov" :en "List of recipes"}
                                                     (db/get-list-of-all-recipes db/zelene-recepty-db)
                                                     :title
                                                     lang
                                                     (language-link "/list-of-recipes" lang))})

                  "/recipe" (fn [{:keys [lang server-name uri query-string] :as request}]
                              (let [recipe-id (-> request :params :Id (maybe-param 0))]
                                {:status 200
                                 :body (view/recipe-template
                                        (update-recipe (db/get-recipe db/zelene-recepty-db recipe-id) lang)
                                        lang
                                        (lang {:en "Ingredients" :sk "Ingrediencie"})
                                        (lang {:en "Method" :sk "Postup"})
                                        (lang {:sk "Čas" :en "Time"})
                                        (lang {:sk "Zdroj:" :en "Origin:"})
                                        (format "http://www.facebook.com/sharer.php?u=%s" (str server-name uri query-string)))}))

                  "/recipes" (fn [{:keys [lang] :as request}]
                               (let [ingredient-id (-> request :params :ingredientId (maybe-param 0))]
                                 {:status 200
                                  :body (view/main-template
                                         (lang {:sk "Recept" :en "Recipe"})
                                         (->>
                                          (db/get-thumbnails-for-ingredient db/zelene-recepty-db ingredient-id)
                                          (map (fn [recipe]
                                                 (-> recipe
                                                     (update-in [:title] lang)
                                                     (update-in [:ingredients] (partial map #(get-in % [:name lang])))))))
                                         (list-of-categories lang)
                                         7
                                         (db/get-proper-ingredient-name-from-id db/zelene-recepty-db ingredient-id lang)
                                         (lang {:sk "RAW Vegan Kuchárka" :en "RAW Vegan CookBook"})
                                         (lang {:sk "images/hore.png"  :en "images/up.png"})
                                         (lang {:sk "images/en-logo-mini.png" :en "images/sk-logo-mini.png"})
                                         (format "%s&lang=%s" (format "/recipes?ingredientId=%s" ingredient-id)
                                                 (if (= lang :sk) "en" "sk"))
                                         (lang {:sk "Zelené recepty" :en "Green recipes"})
                                         (lang {:sk "info@zelenerecepty.sk" :en "info@green-recipes.com"})
                                         (name lang))}))})

(defn router [{:keys [uri] :as request}]
  (if (= "/" uri)
    (home-handler request)
    (let [request-fn (get routing-map uri not-found)]
      (request-fn request))))

(def handler (-> router
                 (middleware/wrap-in-construction in-construction)
                 middleware/wrap-ua-info
                 middleware/wrap-language
                 middleware/wrap-params
                 middleware/wrap-html-response
                 (resource/wrap-resource "public")
                 content-type/wrap-content-type
                 not-modified/wrap-not-modified))
