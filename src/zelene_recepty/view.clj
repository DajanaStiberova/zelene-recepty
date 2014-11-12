(ns zelene-recepty.view
  (:require [clojure.string :as string]
            [net.cgrand.enlive-html :as html]))

(defn- render-with-delimiter [delimiter padding max-items coll]
  (if (> (count coll) max-items)
    (str (string/join delimiter (take max-items coll)) padding)
    (string/join delimiter coll)))

(def ^:private render-list (partial render-with-delimiter "," " ..."))

(html/defsnippet menu-bar "index.html" [:ul#menu [:li (html/nth-of-type 1)]]
  [title link]
  [:li :a] (html/do->
            (html/set-attr :href link)
            (html/content title)))

(html/defsnippet first-letter "listings.html" [:div#ingredients-list [:ul (html/nth-of-type 1)] [:li (html/nth-of-type 1)]]
  [letter]
  [:li] (html/content letter))

(html/defsnippet grouped-list "listings.html" [:div#ingredients-list [:ul (html/nth-of-type 1)]]
  [list-snippet [letter items]]
  [:ul] (html/content
         (cons (first-letter letter)
               (map list-snippet items))))

(html/defsnippet ingredient-list-item "listings.html" [:div#ingredients-list [:ul (html/nth-of-type 1)] [:li (html/nth-of-type 2)]]
  [name-path {:keys [id] :as ingredient}]
  [:li :a] (html/do->
            (html/set-attr :href (format "recipes?ingredientId=%s#hr" id))
            (html/content (get-in ingredient name-path))))

(html/deftemplate ingredients-template "listings.html"
  [site-title language-image ingredients-grouped ingredient-name-path categories site-name title-text]
  [:div#recipes :h1] (html/content site-title)
  [:div#language-logo :img] (html/set-attr :src language-image)
  [:div#ingredients-list] (html/content
                           (map (partial grouped-list
                                         (partial ingredient-list-item
                                                  ingredient-name-path))
                                ingredients-grouped))
  [:ul#menu] (html/content
              (map (fn [{:keys [title link]}]
                     (menu-bar title (name link)))
                   categories))
  [:div#title :h1] (html/content site-name)
  [:head :title] (html/content title-text))

(html/defsnippet recipe-list-item "listings.html" [:div#ingredients-list [:ul (html/nth-of-type 1)] [:li (html/nth-of-type 2)]]
  [name-path recipe]
  [:li :a] (html/content (get-in recipe name-path)))

(html/deftemplate recipes-template "listings.html"
  [site-title language-image recipes-grouped recipe-name-path categories site-name title-text]
  [:div#recipes :h1] (html/content site-title)
  [:div#language-logo :img] (html/set-attr :src language-image)
  [:div#ingredients-list] (html/content
                           (map (partial grouped-list
                                         (partial recipe-list-item
                                                  recipe-name-path))
                                recipes-grouped))
  [:ul#menu] (html/content
              (map (fn [{:keys [title link]}]
                     (menu-bar title (name link)))
                   categories))
  [:div#title :h1] (html/content site-name)
  [:head :title] (html/content title-text))

(html/defsnippet thumbnail "index.html" [[:div.thumbnail (html/nth-of-type 1)]]
  [thumbnail-link name description recipe-link]
  [:img] (html/set-attr :src thumbnail-link)
  [:h2] (html/content name)
  [:p] (html/content description)
  [:a.info] (html/content recipe-link))

(html/deftemplate main-template "index.html"
  [recipe-link recipes categories max-ingredients site-title site-name up-image language-image title-text]
  [:div#thumbnails] (html/content
                     (map (fn [{:keys [title ingredients thumbnail-link]}]
                            (thumbnail thumbnail-link title (render-list 7 ingredients) recipe-link))
                          recipes))
  [:ul#menu] (html/content
              (map (fn [{:keys [title link]}]
                     (menu-bar title (name link)))
                   categories))
  [:div#recipes :h1] (html/content site-title)
  [:div#title :h1] (html/content site-name)
  [:div#up] (fn [node]
              (when (> (count recipes) 8)
                (html/at node [:a :img] (html/set-attr :src up-image))))
  [:div#language-logo :img] (html/set-attr :src language-image)
  [:head :title] (html/content title-text))

(html/defsnippet recipe-images "recipe.html" [[:div.polaroid-image (html/nth-of-type 1)]]
  [image-link image-description]
  [:img] (html/set-attr :src image-link)
  [:a] (html/set-attr :title image-description))

(html/defsnippet ingredients-template "recipe.html" [:table [:tr (html/nth-of-type 1)]]
  [[ingredient amount unit :as ingredients]]
  [[:td (html/nth-of-type 1)]] (html/content ingredient)
  [[:td (html/nth-of-type 2)]] (html/content (str amount))
  [[:td (html/nth-of-type 3)]] (html/content unit))

(html/deftemplate recipe-template "recipe.html"
  [recipe-title ingredients-title {:keys [images] :as recipe} language instructions ingredients]
  [:div.polaroid-images] (html/content (map (fn [{:keys [link name]}]
                                              (recipe-images link (language name)))
                                            images))
  [:div#recipe-title :p] (html/content recipe-title)
  [:div#ingredients :h1] (html/content ingredients-title)
  [:div#instructions :h1] (html/content instructions)
  [:div#ingredients :table] (html/content (map ingredients-template ingredients)))

;; Returns not-found html with dynamic message (first argument) in the content of
;; 'div#title h1' tag and filled categories (sequence of category maps)
;; in the content of 'ul#menu' tag.

(html/deftemplate not-found-template "not-found.html"
  [not-found-message language-image categories]
  [:div#title :h1] (html/content not-found-message)
  [:div#language-logo :img] (html/set-attr :src language-image)
  [:ul#menu] (html/content
              (map (fn [{:keys [title link]}]
                     (menu-bar title (name link)))
                   categories)))
