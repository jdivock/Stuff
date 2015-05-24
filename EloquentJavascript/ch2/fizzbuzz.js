'use strict';

var _ = require('../util');

_.range(100).map(function(e) {
    if (e % 3 === 0) {
	console.log('fizz');
    } else if (e % 5 === 0) {
	console.log('buzz');
    } else {
	console.log(e);
    }
});
