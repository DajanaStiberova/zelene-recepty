(ns zelene-recepty.utils
  (:require [clojure.string :as string]))

(defn- mins [number]
  (rem number 60))

(defn- hours [number]
  (/(- number (mins number))60))

(defn fill-hours-and-mins [number]
  (cond
   (and (> (mins number) 0) (> (hours number) 0))
   (format "%s hod %s min" (hours number) (mins number))
   (> (hours number) 0)
   (format "%s hod" (hours number))
   (> (mins number) 0)
   (format "%s min" (mins number))))

(defn- group-by-first-letter [ks seq]
  (group-by (comp string/upper-case str first #(get-in % ks)) seq))

(defn group-and-sort
  "This function takes an sequence-of-maps (as for example '({:name {:sk \"Sol\" :en \"Salt\"}} {:name {:sk \"Syr\" :en \"Cheese\"}}))
  and groups them according to first letters under specified ks (as for example [:name :sk]).
  It also sort the grouped structure alphabetically at all levels."
  [sequence-of-maps ks]
  (->> (group-by-first-letter ks sequence-of-maps)
       (sort-by first)
       (map (juxt first (comp (partial sort-by #(get-in % ks)) second)))))
