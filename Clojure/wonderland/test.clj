(take 5 (range))

(take 10 (range))

(for [animals [:duck :cow :goose]
      colors [:red :blue]
      :let [animal-str (str "animals-" (name animals))
            color-str (str "color-" (name colors))
            out-str (str animal-str color-str)]]
  out-str )


(for [animals [:duck :cow :goose]
      colors [:red :blue]
      :let [animal-str (str "animals-" (name animals))
            color-str (str "color-" (name colors))
            out-str (str animal-str " " color-str)]
      :when (= colors :blue)]
  out-str )

(into {} [{:one 1} {:two 2} {:three 3}{:four 4}{ :five 5}])


(into [] '(1 2 3 4))


(partition 3 (take 10 (range)))

(partition-all 3 (take 10 (range)))

(def who-atom (atom :catepillar))

@who-atom

(reset! who-atom :crystalis)


(def who-atom (atom :catepillar))

(defn change [state]
  (case state
    :catepillar :crystallis
    :chrystallis :butterfly
    :butterfly
    )
  )


(swap! who-atom change)
(swap! who-atom change)

(def counter (atom 0))

(dotimes [_ 5] (swap! counter inc))

@counter

(def counter (atom 0))

(let [n 5]
  (future(dotimes [_ 5] (swap! counter inc)))
  (future(dotimes [_ 5] (swap! counter inc)))
  (future(dotimes [_ 5] (swap! counter inc)))
  )

(def counter (atom 0))

(defn inc-counter [val]
  (println val)
  (inc val)
  )

(let [n 5]
  (future(dotimes [_ 5] (swap! counter inc-counter)))
  (future(dotimes [_ 5] (swap! counter inc-counter)))
  (future(dotimes [_ 5] (swap! counter inc-counter)))
  )

@counter

(def alice-height (ref 3))
(def left-hand-bites (ref 10))

@alice-height
@left-hand-bites

(defn eat-from-left-hand []
  (dosync (when (pos? @left-hand-bites)
    (alter left-hand-bites dec)
    (alter alice-height #(+ % 24))
    ))
  )

(let [n 2]
  (future (dotimes [_ n] (eat-from-left-hand)))
  (future (dotimes [_ n] (eat-from-left-hand)))
  (future (dotimes [_ n] (eat-from-left-hand)))
  )


(println @alice-height @left-hand-bites)


(def x (ref 1))
(def y (ref 1))

(defn new-values []
  (dosync
    (alter x inc)
    (ref-set y (+ 2 @x))
    )
  )

(let [n 2]
  (future (dotimes [_ n] (new-values)))
  (future (dotimes [_ n] (new-values)))
  )

(println @x @y)

(def who-agent (agent :caterpillar))

(defn change [state]
  (case state
    :caterpillar :chrysalis
    :chrysalis :butterfly
    :butterfly
    )
  )

;;(send who-agent change)
(send-off who-agent change)
@who-agent

(defn change-error [state]
  (throw (Exception. "Boom!"))
  )

(send-off who-agent change-error)

(agent-errors who-agent)

(restart-agent who-agent :catepillar)
@who-agent


(def who-agent (agent :caterpillar))

(defn change-error [state]
  (throw (Exception. "Boom!"))
  )

(set-error-mode! who-agent :continue)

(defn err-handler-fn [a ex]
  (println "error " ex " value is " @a)
  )

(set-error-handler! who-agent err-handler-fn)

(send who-agent change-error)

