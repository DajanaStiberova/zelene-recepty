(ns zelene-recepty.time
  (:import [java.util Date]
           [java.text SimpleDateFormat]))

(def default-format (SimpleDateFormat. "dd/MM/yyyy"))

(defn format-date [^Date date]
  (.format default-format date))
