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
  [:div#listing :h1] (html/content site-title)
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
  [:head :tile] (html/content title-text)
  )

(html/defsnippet ingredient-list-item "listings.html" [:div#ingredients-list [:ul (html/nth-of-type 1)] [:li (html/nth-of-type 2)]]
  [name-path language {:keys [id] :as ingredient}]
  [:li :a] (html/do->
            (html/set-attr :href (format "recipes?ingredientId=%s&lang=%s#hr" id language))
            (html/content (get-in ingredient name-path))))

(def ingredients-template (partial grouped-lists-template ingredient-list-item))

(html/defsnippet recipe-list-item "listings.html"
  [:div#ingredients-list [:ul (html/nth-of-type 1)] [:li (html/nth-of-type 3)]]
  [name-path language {:keys [id] :as recipe}]
  [:li] (html/do->
         (html/set-attr :data-recipe-id id)
         (html/set-attr :data-recipe-lang language)
         (html/content (get-in recipe name-path))))

(def recipes-template (partial grouped-lists-template recipe-list-item))

(html/defsnippet thumbnail "index.html" [[:div.thumbnail (html/nth-of-type 1)]]
  [{:keys [thumbnail-link title ingredients id]} language]
  [:div.mask] (html/do->
               (html/set-attr :data-recipe-id id)
               (html/set-attr :data-recipe-lang language))
  [:img] (html/set-attr :src thumbnail-link)
  [:h2] (html/content title)
  [:p] (html/content ingredients)
  ;;[:a] (html/set-attr :href (format "#recipe/%s/lang/%s" id language))
  )

(html/deftemplate main-template "index.html"
  [recipes categories max-ingredients site-title site-name up-image language-image language-link title-text info-mail language]
  [:div#thumbnails] (html/content
                     (map (fn [{:keys [ingredients] :as recipe}]
                            (-> recipe
                                (update-in [:ingredients] #(render-list 6 %))
                                (thumbnail language)))
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
   language ingredients-title instructions-title time-title origin-title
   facebook-share-text facebook-share twitter-share-text twitter-share]
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
  [:a#facebook-recipe] (html/content facebook-share-text)
  [:a#facebook-recipe] (html/set-attr :href facebook-share)
  [:a#twitter-recipe] (html/content twitter-share-text)
  [:a#twitter-recipe] (html/set-attr :href twitter-share))

(html/deftemplate recipe-template-full "recipe.html"
  [{:keys [title recipe-date images serving preparation-time origin ingredients text] :as recipe}
   language ingredients-title instructions-title 
   time-title origin-title facebook-share-text facebook-share twitter-share-text
   twitter-share image-link url meta-description-ingredients redirect-script]
  [[:meta (html/nth-of-type 1)]] (html/set-attr :content title)
  [[:meta (html/nth-of-type 3)]] (html/set-attr :content image-link)
  [[:meta (html/nth-of-type 4)]] (html/set-attr :content url)
  [[:meta (html/nth-of-type 5)]] (html/set-attr :content meta-description-ingredients)
  [[:script (html/nth-of-type 1)]] (html/content redirect-script)
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
  [:a#facebook-recipe] (html/content facebook-share-text)
  [:a#facebook-recipe] (html/set-attr :href facebook-share)
  [:a#twitter-recipe] (html/content twitter-share-text)
  [:a#twitter-recipe] (html/set-attr :href twitter-share))


(def recipe-template (comp (partial apply html/emit*) recipe-snippet))

(html/defsnippet select-category "add-recipe.html"
  [:select#category [:option (html/nth-of-type 1)]]
  [category]
  [:option] (html/content category))

(html/defsnippet select-ingredient "add-recipe.html"
  [:div#ingredients-amounts-units :div#ingredients-for-snippet [:select#ingredient (html/nth-of-type 1)] [:option (html/nth-of-type 1)]]
  [ingredient]
  [:option] (html/content ingredient))

(html/defsnippet select-unit "add-recipe.html"
  [:div#ingredients-amounts-units :div#units-for-snippet [:select#unit (html/nth-of-type 1)] [:option (html/nth-of-type 1)]]
  [unit]
  [:option] (html/content unit))

(html/deftemplate add-recipe-template "add-recipe.html"
  [categories title language-image language-link categories-titles ingredients-titles
   units-titles amount-text add-ingredient-text serving-amount-text serving-time-text origin-text recipe-title-placeholder method-placeholder submit-text]
  [:ul#menu] (html/content
              (map (fn [{:keys [title link]}]
                     (menu-bar title (name link)))
                   categories))
  [:div#ar-title] (html/content title)
  [:div#language-logo :img] (html/set-attr :src language-image)
  [:div#language-logo :a] (html/set-attr :href language-link)
  [:select#category] (html/content (map (fn [category]
                                          (select-category category))
                                        categories-titles))
  [:select#ingredient] (html/content (map (fn [ingredient]
                                            (select-ingredient ingredient))
                                          ingredients-titles))
  [:select#unit] (html/content (map (fn [unit]
                                      (select-unit unit))
                                    units-titles))
  [:select#serving-unit] (html/content (map (fn [unit]
                                              (select-unit unit))
                                            units-titles))

  [:input#amount] (html/set-attr :placeholder amount-text)
  [:div#new-ingredient :input#add-ingredient] (html/set-attr :placeholder add-ingredient-text)
  [:div#new-ingredient :input#add-amount] (html/set-attr :placeholder amount-text)
  [:div#serving-section :input#serving-amount] (html/set-attr :placeholder serving-amount-text)
  [:div#serving-time :input] (html/set-attr :placeholder serving-time-text)
  [:div#origin :input] (html/set-attr :placeholder origin-text)
  [:div#ar-recipe-title :input] (html/set-attr :placeholder recipe-title-placeholder)
  [:div#ar-recipe-text :textarea] (html/set-attr :placeholder method-placeholder)
  [:div#send-recipe :button] (html/content submit-text))

;; Returns not-found html with dynamic message (first argument) in the content of
;; 'div#title h1' tag and filled categories (sequence of category maps)
;; in the content of 'ul#menu' tag.


(html/deftemplate in-construction-template "in-construction.html"
  [site-description title language-image language-link]
  [:div#site-description :h1] (html/content site-description)
  [:div#title :h1] (html/content title)
  [:div#language-logo :img] (html/set-attr :src language-image)
  [:div#language-logo :a] (html/set-attr :href language-link))

(html/deftemplate not-found-template "not-found.html"
  [not-found-message language-image categories language-link]
  [:div#title :h1] (html/content not-found-message)
  [:div#language-logo :img] (html/set-attr :src language-image)
  [:div#language-logo :a] (html/set-attr :href language-link)
  [:ul#menu] (html/content
              (map (fn [{:keys [title link]}]
                     (menu-bar title (name link)))
                   categories)))
