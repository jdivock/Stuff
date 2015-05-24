function arrayToList(arr){
	var idx = 0;
	var list = { value: arr[0], rest: null};
	var curr = list;

	for(idx = 1; idx < arr.length; idx++){
		curr.rest = {value: arr[idx], rest: null};
		curr = curr.rest;
	}

	return list;
}

function listToArray(list){
	var arr = [];

	var curr = list;

	while(curr){
		arr.push(curr.value);
		curr = curr.rest;
	}

	return arr;
}

function _prepend(el, list){
	var head = {value: el, rest: list};
	return head;
}

function _nth(list, index){
	if(index === 0){
		return list.value;
	}

	return _nth(list.rest, --index);
}

var arr1 = [0,1,2,3,4];

var list1 = arrayToList(arr1);

console.log(list1);

console.log(listToArray(list1));

var list2 = _prepend(-1, list1);

console.log(listToArray(list2));

console.log(_nth(list2,3));

console.log(_nth(arrayToList([10, 20, 30]), 1));
