var ANCESTRY_FILE = require('./ancestry');

var ancestry = JSON.parse(ANCESTRY_FILE);


function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

var bucketCenturies = function(ancestry){
	return ancestry.reduce(function(accum, person){
		var bucketYear = Math.ceil(person.died / 100);

		if(!accum[bucketYear]){
			accum[bucketYear] = [];
		}

		accum[bucketYear].push(person.died - person.born);
		return accum;
	}, {});
}
var bucketYears = bucketCenturies(ancestry);

for( year in bucketYears) {
	console.log(year + ': ' + average(bucketYears[year]));
}

// Your code here.
//
// // → 16: 43.5
// //   17: 51.2
// //   18: 52.8
// //   19: 54.8
// //   20: 84.7
// //   21: 94
