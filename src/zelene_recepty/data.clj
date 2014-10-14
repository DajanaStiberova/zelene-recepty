(ns zelene-recepty.data)

(def ingredients '({:id 1 :name "soľ"}
                   {:id 2 :name "avokádo"}
                   {:id 3 :name "cesnak"}
                   {:id 4 :name "cibuľa"}
                   {:id 5 :name "rajčina"}
                   {:id 6 :name "citrón"}
                   {:id 7 :name "kakao"}
                   {:id 8 :name "kokosový olej"}
                   {:id 9 :name "madle"}
                   {:id 10 :name "agáve"}
                   {:id 11 :name "mätový extrakt"}
                   {:id 12 :name "brokolica"}
                   {:id 13 :name "špenát"}
                   {:id 14 :name "čínska kapusta"}
                   {:id 15 :name "slnečnicové semienka"}
                   {:id 16 :name "olivový olej"}
                   {:id 17 :name "jablčný ocot"}
                   {:id 18 :name "tamari omáčka"}
                   {:id 19 :name "horčica"}
                   {:id 20 :name "špalda"}
                   {:id 21 :name "voda"}
                   {:id 22 :name "himalájska soľ"}
                   {:id 23 :name "horčičné semiačka"}
                   {:id 24 :name "sušené rajčiny"}
                   {:id 25 :name "vínny ocot"}
                   {:id 26 :name "konopné semiačka"}
                   {:id 27 :name "tekvicové semiačka"}
                   {:id 28 :name "čierne korenie"}
                   {:id 29 :name "bazalka"}
                   {:id 30 :name "špenát"}
                   {:id 31 :name "píniové oriešky"}
                   {:id 32 :name "huby"}
                   {:id 33 :name "paprika"}
                   {:id 34 :name "vlašské orechy"}
                   {:id 35 :name "drvené bylinky"}
                   {:id 36 :name "kešu"}
                   {:id 37 :name "karob"}
                   {:id 38 :name "chia semiačka"}
                   {:id 39 :name "hrozienka"}
                   {:id 40 :name "datle"}
                   {:id 41 :name "obilné zrná"}
                   {:id 42 :name "jahody"}
                   {:id 43 :name "rebarbora"}
                   {:id 44 :name "mrkva"}
                   {:id 45 :name "ľanové semiačka"}
                   {:id 46 :name "rasca"}
                   {:id 47 :name "červená kapusta"}
                   {:id 48 :name "listová zelenina"}
                   {:id 49 :name "tahini dressing"}
                   {:id 50 :name "cícer"}
                   {:id 51 :name "červená paprika"}
                   {:id 52 :name "tahini"}))


(def recipes '({:id 1
                :thumbnail "images/thumbnails/guacamole.jpg"
                :title "Guacamole"
                :ingredients #{2 3 1 4 5 6}
                :category 1}
               {:id 2
                :thumbnail "images/thumbnails/choco-mint.jpg"
                :title "Mätové toliariky"
                :ingredients #{7 3 8 9 1 10 11}
                :category 3}
               {:id 3
                :thumbnail "images/thumbnails/brokolicovy-salat.jpg"
                :title "Brokolicový šalát"
                :ingredients #{12 13 14 5 15 16
                               17 6 10 18 19 3 1}
                :category 1}
               {:id 4
                :thumbnail "images/thumbnails/spaldovy-chlieb.jpg"
                :title "Špaldový chlieb"
                :ingredients #{20 21 22}
                :category 1}
               {:id 5
                :thumbnail "images/thumbnails/horcica.jpg"
                :title "Domáca Horčica"
                :ingredients #{23 24 25 1 10 21}
                :category 2}
               {:id 6
                :thumbnail "images/thumbnails/pizza.jpg"
                :title "Pizza so špenátovým pestom"
                :ingredients #{26 27 15 34 1 28 29 10 3 4 30 31 32 33 5 18 35}
                :category 1}
               {:id 7
                :thumbnail "images/thumbnails/kesu-syr.jpg"
                :title "Kešu syr"
                :ingredients #{36 37 41}
                :category 1}
               {:id 8
                :thumbnail "images/thumbnails/carob-cookies.jpg"
                :title "Karobové chia cookies"
                :ingredients #{34 39 40 37 38 1}
                :category 3}
               {:id 9
                :thumbnail "images/thumbnails/jahodova-limonada.jpg"
                :title "Jahodová limonáda"
                :ingredients #{42 43 10 6 21}
                :category 4}
               {:id 10
                :thumbnail "images/thumbnails/wrap.jpg"
                :title "Wrap"
                :ingredients #{44 45 46 18 47 48 2 5 49}
                :category 1}
               {:id 10
                :thumbnail "images/thumbnails/tahini-dresing.jpg"
                :title "Tahini dressing"
                :ingredients #{52 51 50}
                :category 2}))
