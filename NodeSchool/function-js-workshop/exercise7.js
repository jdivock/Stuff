module.exports = reduce;


function reduce(arr, fn, initial) {


    if (!arr.length) {
        return initial;
    }

    // Pretty sure index is broken here
    var result = fn(initial, arr[0], arr.length, arr);

    // console.log(arr.length);

    return reduce(arr.slice(1), fn, result);

}

// Their solution
 function reduceTheirs(arr, fn, initial) {
        return (function reduceOne(index, value) {
        	// console.log(index);
          if (index > arr.length - 1) {
          	return value; // end condition
          }
          return reduceOne(index + 1, fn(value, arr[index], index, arr)); // calculate & pass values to next step
        })(0, initial); // IIFE. kick off recursion with initial values
      }

 //      module.exports = reduce
