function deepEqual(cmp1, cmp2){
	if(typeof cmp1 !== "object"){
		return cmp1 === cmp2;
	}

	if( cmp1 === null){
		return cmp1 === null && cmp2 === null;
	}

	for(k in cmp1){
		return deepEqual(cmp1[k], cmp2[k]);
	}
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
