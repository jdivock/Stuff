ANCESTRY_FILE = require('./ancestry');

var ancestry = JSON.parse(ANCESTRY_FILE);

console.log(ancestry.length);

function filter(array, test){
	var passed = [];
	array.forEach(function(el){
		if(test(el)){
			passed.push(el);
		}
	});
	return passed;
}

console.log(filter(ancestry, function(person){
	return person.born > 1900 && person.born < 1925;
}));

console.log(ancestry.filter(function(person){
	return person.born > 1900 && person.born < 1925;
}));
