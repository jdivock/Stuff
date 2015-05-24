var slice = Array.prototype.slice;

function logger(namespace) {
    return function(){
    	var logArgs = slice.call(arguments);

    	logArgs.unshift(namespace);

    	console.log.apply(null, logArgs);

    	

    };
}

module.exports = logger;


function theirLogger(namespace) {
        return function() {
          console.log.apply(console, [namespace].concat(slice.call(arguments)));
        };
      }