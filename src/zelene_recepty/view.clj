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

(html/deftemplate grouped-lists-template "listings.html"
  [data-snippet site-title language-image language-link data-grouped data-name-path categories site-name info-mail title-text language]
  [:div#recipes :h1] (html/content site-title)
  [:div#language-logo :img] (html/set-attr :src language-image)
  [:div#language-logo :a] (html/set-attr :href language-link)
  [:div#ingredients-list] (html/content
                           (map (partial grouped-list
                                         (partial data-snippet
                                                  data-name-path language))
                                data-grouped))
  [:ul#menu] (html/content
              (map (fn [{:keys [title link]}]
                     (menu-bar title link))
                   categories))
  [:div#title :h1] (html/content site-name)
  [:a#mail] (html/set-attr :href (format "mailto:%s" info-mail))
  [:a#mail] (html/content info-mail)
  [:head :title] (html/content title-text)
  )

(html/defsnippet ingredient-list-item "listings.html" [:div#ingredients-list [:ul (html/nth-of-type 1)] [:li (html/nth-of-type 2)]]
  [name-path language {:keys [id] :as ingredient}]
  [:li :a] (html/do->
            (html/set-attr :href (format "recipes?ingredientId=%s&lang=%s#hr" id language))
            (html/content (get-in ingredient name-path))))

(def ingredients-template (partial grouped-lists-template ingredient-list-item))

(html/defsnippet recipe-list-item "listings.html"
  [:div#ingredients-list [:ul (html/nth-of-type 1)] [:li (html/nth-of-type 2)]]
  [name-path language {:keys [id] :as recipe}]
  [:li :a] (html/do->
            (html/set-attr :href (format "recipe?Id=%s&lang=%s" id language))
            (html/content (get-in recipe name-path))))

(def recipes-template (partial grouped-lists-template recipe-list-item))

(html/defsnippet thumbnail "index.html" [[:div.thumbnail (html/nth-of-type 1)]]
  [thumbnail-link name description recipe-link recipe-id language]
  [:div.mask] (html/do->
               (html/set-attr :data-recipe-id recipe-id)
               (html/set-attr :data-recipe-lang language))
  [:img] (html/set-attr :src thumbnail-link)
  [:h2] (html/content name)
  [:p] (html/content description)
  [:a.info] (html/content recipe-link))

(html/deftemplate main-template "index.html"
  [recipe-link recipes categories max-ingredients site-title site-name up-image language-image language-link title-text info-mail language]
  [:div#thumbnails] (html/content
                     (map (fn [{:keys [title ingredients thumbnail-link id]}]
                            (thumbnail thumbnail-link title (render-list 6 ingredients) recipe-link id language))
                          recipes))
  [:ul#menu] (html/content
              (map (fn [{:keys [title link]}]
                     (menu-bar title (name link)))
                   categories))
  [:div#recipes :h1] (html/content site-title)
  [:div#title :h1] (html/content site-name)
  [:a#up] (fn [node]
            (when (> (count recipes) 8)
              (html/at node [:img] (html/set-attr :src up-image))))
  [:div#language-logo :img] (html/set-attr :src language-image)
  [:div#language-logo :a] (html/set-attr :href language-link)
  [:head :title] (html/content title-text)
  [:a#mail] (html/set-attr :href (format "mailto:%s" info-mail))
  [:a#mail] (html/content info-mail))

(html/defsnippet recipe-images "recipe.html" [[:div.polaroid-image (html/nth-of-type 1)]]
  [image-link image-description]
  [:img] (html/set-attr :src image-link)
  [:a] (html/set-attr :title image-description))

(html/defsnippet ingredients-snippet "recipe.html" [:table [:tr (html/nth-of-type 1)]]
  [{:keys [name amount unit-name] :as ingredients}]
  [[:td (html/nth-of-type 1)]] (html/content name)
  [[:td (html/nth-of-type 2)]] (html/content (str amount))
  [[:td (html/nth-of-type 3)]] (html/content unit-name))

(html/defsnippet recipe-snippet "recipe.html" [:body :div#content]
  [{:keys [recipe-date title images serving preparation-time origin ingredients text] :as recipe}
   language ingredients-title instructions-title time-title origin-title facebook-share]
  [:div#date :p] (html/content recipe-date)
  [:div#recipe-title :h2] (html/content title)
  [:div.polaroid-images] (html/content (map (fn [{:keys [link name]}]
                                              (recipe-images link name))
                                            images))
  [:div#serving :p] (html/content (str (:amount serving)))
  [:div#time :p] (html/content preparation-time)
  [:div#ingredients :table] (html/content (map ingredients-snippet ingredients))
  [:div#ingredients :h1] (html/content ingredients-title)
  [:div#instructions :h1] (html/content instructions-title)
  [:div#instructions :p] (html/html-content text)
  [:div#serving :h1] (html/content (:unit-name serving))
  [:div#time :h1] (html/content time-title)
  [:div#origin :h1] (html/content origin-title)
  [:div#origin :a] (html/do->
                    (html/set-attr :href origin)
                    (html/content origin))
  [:a#facebook] (html/set-attr :href facebook-share))

(def recipe-template (comp (partial apply html/emit*) recipe-snippet))

;; Returns not-found html with dynamic message (first argument) in the content of
;; 'div#title h1' tag and filled categories (sequence of category maps)
;; in the content of 'ul#menu' tag.

(html/deftemplate not-found-template "not-found.html"
  [not-found-message language-image categories language-link]
  [:div#title :h1] (html/content not-found-message)
  [:div#language-logo :img] (html/set-attr :src language-image)
  [:div#language-logo :a] (html/set-attr :href language-link)
  [:ul#menu] (html/content
              (map (fn [{:keys [title link]}]
                     (menu-bar title (name link)))
                   categories)))
