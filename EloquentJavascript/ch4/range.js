function range(start, end){
	var ret = [];

	if(!end){
		end = start;
		start = 0;
	}

	for( var i = start; i <= end; i++) {
		ret.push(i);
	}

	return ret;
}

console.log(range(1,4));

function sum(arr){
	return arr.reduce(function(accum, el){
		return accum += el;
	},0)
}

console.log(sum(range(1,4)));

function rangeStep(start, end, step){
	var ret = [];

	if(!end){
		end = start;
		start = 0;
	}

	for( var i = start; i <= end; i += step) {
		ret.push(i);
	}

	return ret;
}

console.log(rangeStep(1,10,2));

