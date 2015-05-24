// module.exports = function makeImportant(val, excl = val.length){

// 	var exlStr = '!'.repeat(excl);

// 	return `${val}${exlStr}`;
// };

module.exports =
        (string, bangs = string.length) => string + "!".repeat(bangs);