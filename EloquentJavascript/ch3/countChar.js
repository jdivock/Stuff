function countChar(str, char, count) {
	count = count || 0;

	if (!str) {
		return count;
	}

	if (str.charAt(0) === char) {
		count++;
	}

	return countChar(str.slice(1, str.length), char, count);
}


console.log(countChar(process.argv[2], process.argv[3]));
