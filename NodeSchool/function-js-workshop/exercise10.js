// function logger(namespace) {
//     return function() {
//         var args = Array.prototype.join.call(arguments, ' ');

//         console.log.bind(null, namespace, args)();
//     };
// }

// module.exports = logger;


module.exports = function theirLogger(namespace) {
    return console.log.bind(console, namespace);
};
