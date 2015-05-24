(function(){

	var numbers = process.argv.slice(2);
	var min = Math.min(...process.argv.slice(2));

	console.log(`The minimum of [${numbers}] is ${min}`);

})();