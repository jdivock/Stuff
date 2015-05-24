(ns serpent-talk.talk
  (:require [camel-snake-kebab.core :as csk])
  )

(defn serpent-talk
  "just yells at you"
  [said]
  (str "Serpent! You said: " (csk/->snake_case  said)))

(defn serpent-talk-camel
  [input]
  (str "Serpent! You said: " (csk/->camelCase input))
  )

;;(serpent-talk-camel "saying some stuff")

(defn -main [& args]
  (println (serpent-talk (first args)))
  )
