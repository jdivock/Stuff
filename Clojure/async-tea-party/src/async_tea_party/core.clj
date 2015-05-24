(ns async-tea-party.core
  (:gen-class)
  (:require [clojure.core.async :as async])
  )

(def google-tea-service-chan (async/chan 10))
(def yahoo-tea-service-chan (async/chan 10))
(def result-chan (async/chan 10))

(defn random-add []
  (reduce + (conj [] (repeat 1 (rand-int 1000000)))))


;; Still don't quite get what's going on here
;;(conj [] (repeat 1 (rand-int 1000000)))
;; (conj [] (rand-int 1000000))
;;(rand-int 1000000)

;;(random-add)

(defn request-google-tea-service []
  (async/go
   (random-add)
   (async/>! google-tea-service-chan
             "Tea compliments of google")))

(defn request-yahoo-tea-service []
  (async/go
   (random-add)
   (async/>! yahoo-tea-service-chan
             "Tea compliments of yahoo")))

(defn request-tea []
  (request-google-tea-service)
  (request-yahoo-tea-service)
  (async/go (let [[v] (async/alts!
                       [google-tea-service-chan
                        yahoo-tea-service-chan])]
              (async/>! result-chan v))))

(defn -main [& args]
  (println "Requesting tea!")
  (request-tea)
  (println (async/<!! result-chan)))
