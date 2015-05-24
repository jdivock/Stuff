'use strict';

var month;

(function(exports){
    var months = ['January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December'];

    exports.name = function(num){
        return months[num];
    };

    exports.number = function(name){
        return months.indexOf(name);
    };
})(month = {});


console.log(month.name(2));
// → March
console.log(month.number('November'));
// → 10
