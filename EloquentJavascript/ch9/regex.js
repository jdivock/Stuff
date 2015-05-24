'use strict';
//1
var carCat = /ca(r|t)/;

//2
var prop = /pr?op/;

verify(/ca(r|t)/,
       ['my car', 'bad cats'],
       ['camper', 'high art']);

verify(/pr?op/,
       ['pop culture', 'mad props'],
       ['plop']);

verify(/ferr(et|y|ari)/,
       ['ferret', 'ferry', 'ferrari'],
       ['ferrum', 'transfer A']);

verify(/\w*ious\b/,
       ['how delicious', 'spacious room'],
       ['ruinous', 'consciousness']);

verify(/\s(\.|,|;)/,
       ['bad punctuation .'],
       ['escape the dot']);

verify(/(\w){7,}/,
       ['hottentottententen'],
       ['no', 'hotten totten tenten']);

// Agh, spent way too much time on this one and ended up giving up, womp
verify(/\b[a-df-z]+\b/i,
       ['red platypus', 'wobbling nest'],
       ['earth bed', 'learning ape']);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == '...') return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log('Failure to match \'' + s + '\'');
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log('Unexpected match for \'' + s + '\'');
  });
}
