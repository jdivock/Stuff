function reverseArray(arr){
	var retArr = [];
	for(var i = arr.length - 1; i >= 0; i--){
		retArr.push(arr[i]);
	}

	return retArr;
}

console.log(reverseArray([0, 1, 2, 3, 4, 5]));

function reverseArrayInPlace(arr){
	var tmpArr = [];
	var len = arr.length;

	for(var i = 0; i < len; i++){
		tmpArr[i] = arr.pop();
	}

	for(var i2 = 0; i2 < len;  i2++){
		arr.push(tmpArr[i2]);
	}
}

var meh = [1,2,3,4,5];

reverseArrayInPlace(meh);

console.log(meh);

function reverseArrayInPlaceBetter(arr){
	var middle = Math.floor(arr.length / 2);
	var index;
	var tmp;

	for(index = 0; index < middle; index++){
		tmp = arr[index];
		arr[index] = arr[arr.length - 1 - index];
		arr[arr.length - 1 - index] = tmp;
	}
}

var meh2 = [1,2,3,4,5];
reverseArrayInPlaceBetter(meh2);
console.log(meh2);

