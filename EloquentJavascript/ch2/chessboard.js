var _ = require('../util.js');

var gridSize = 8;

var grid = _.range(gridSize).reduce(function(accum, index){
	return accum += generateRow(gridSize, index);
}, '');

console.log(grid);

function generateRow(size, rowIdx){
	return _.range(size).reduce(function(accum, colIdx){
		return accum += generateCell('#', rowIdx, colIdx);
	}, '') + '\n';
}

function isEven(num) {
	return num % 2 === 0;
}

function isOdd(num) {
	return num % 2 !== 0;
}

function generateCell(char, row, col) {
	if (isEven(row)) {
		if (isEven(col)) {
			return char;
		} else {
			return ' ';
		}
	} else {
		if (isEven(col)) {
			return ' ';
		} else {
			return char;
		}
	}
}
