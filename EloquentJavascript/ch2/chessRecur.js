'use strict';

var _ = require('../util.js');

var gridSize = 8;


function generateCell(col, row, size, last, grid) {
    var newChar = ' ';

    if (col === 0 && row === 0) {
	return grid;
    }

    if (!last || last === ' ') {
	newChar = '#';
    }

    if (col === 0) {
	return generateCell(size, row - 1, size, newChar, grid + newChar + '\n');
    } else {
	return generateCell(col - 1, row, size, newChar, grid + newChar);
    }
}


console.log(generateCell(gridSize, gridSize, gridSize, null, ''));
