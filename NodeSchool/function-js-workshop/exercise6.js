module.exports = function countWords(inputWords) {

    return inputWords.reduce(function(wordCountObj, word) {

        // if (wordCountObj[word]) {
        //     wordCountObj[word]++;
        // } else {
        // 	wordCountObj[word] = 1;
        // }

        countMap[word] = ++countMap[word] || 1;

        return wordCountObj;

        // wordCountObj[word] ? wordCountObj[word]++ : wordCountObj[word] = 0;
    }, {});

};
