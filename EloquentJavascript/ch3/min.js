function min(val1, val2) {
	if (+val1 < +val2) {
		return val1;
	} else {
		return val2;
	}
}

console.log(min(process.argv[2], process.argv[3]));
