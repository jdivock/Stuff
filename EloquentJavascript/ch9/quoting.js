'use strict';

var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.

// Cheated again here, I'm bad at regex
console.log(text.replace(/(\W|^)'|'(\W|$)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."
