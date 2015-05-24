function countBs(str, count) {
	count = count || 0;

	if (!str) {
		return count;
	}

	if (str.charAt(0) === 'B') {
		count++;
	}

	return countBs(str.slice(1, str.length), count);
}


console.log(countBs(process.argv[2]));
