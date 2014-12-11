(ns zelene-recepty.utils
  (:require [clojure.string :as string]))

(defn split-and-nest
  "Splits keyword names in associative structure by specified regexp
  and creates nested structure if needed, existing non-splitable key-val
  mappings are unaffected."
  [data delimiter]
  (when data (reduce (fn [acc [k v]]
                       (let [key-strs (-> k name (string/split delimiter))]
                         (assoc-in acc (map keyword key-strs) v)))
                     {}
                     data)))

(defn underscore->hypen
  [data k]
  (if-let [v (get data k)]
    (-> data
        (dissoc k)
        (assoc (-> k name (string/replace #"_" "-") keyword) v))
    data))


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


(defn recipe-data-from-params [form-params]
  (when form-params (if (:ingredient form-params)
                      (-> form-params
                          (split-and-nest #"_")
                          (update-in  [:ingredient] #(->> (reduce (fn [acc [k v]]
                                                                    (assoc acc k
                                                                           (map (fn [x] (assoc {} k x)) v)))
                                                                  {} %)
                                                          vals
                                                          (map (partial reduce into []))
                                                          (apply map vector)
                                                          (map (partial into {}))
                                                          (into []))))
                      (-> form-params
                          (split-and-nest #"_")))))
