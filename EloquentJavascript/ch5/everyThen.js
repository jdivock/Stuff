var ANCESTRY = require('./ancestry');

function every(arr, test){
    var ret = true;
    arr.forEach(function(el){
        if(!test(el)){
            ret = false;
            return;
        }
    });
    return ret;
}

function some(arr, test){
    var ret = false;
    arr.forEach(function(el){
        if(test(el)){
            ret = true;
            return;
        }
    });
    return ret;
}


// Your code here.
//
console.log(every([NaN, NaN, NaN], isNaN));
// // → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// // → true
console.log(some([2, 3, 4], isNaN));
// // → false
