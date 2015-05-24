var ANCESTOR_FILE = require('./ancestry');

var ancestry = JSON.parse(ANCESTOR_FILE);
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

// Your code here.
function hasMother(person){
    return person.mother && byName[person.mother];
}

function getAgeDifference(person){
    var mother = byName[person.mother];

    return person.born - mother.born;
}

var avg = average.bind(null, ancestry.filter(hasMother).map(function(person){
    return getAgeDifference(person);
}));

avg();
console.log(avg());
