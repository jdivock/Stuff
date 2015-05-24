(defproject hello-world "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-cljsbuild "1.0.3"]]
  :dependencies [[org.clojure/clojure "1.6.0"],
  				[org.clojure/clojurescript "0.0-2322"]]
  :cljsbuild {:builds [{
  		:source-path "src/cljs"
  		:compiler {
  			:output-to "resources/public/hello.js"
  			:optimizations :whitespace
  			:pretty-print true
  		}
  	}]})
