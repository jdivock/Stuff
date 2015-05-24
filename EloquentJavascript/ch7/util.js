'use strict';

var Util = {};

Util.elementFromChar = function(legend, ch){
    if(ch === ' '){
        return null;
    }
    var element = new legend[ch]();
    element.originChar = ch;
    return element;
};

Util.charFromElement = function(element){
    if(element === null){
        return ' ';
    } else {
        return element.originChar;
    }
};

Util.randomElement = function(array){
    return array[Math.floor(Math.random() * array.length)];
};

Util.directionNames = 'n ne e se s sw w nw'.split(' ');

Util.dirPlus = function(dir, n){
    var index = Util.directionNames.indexOf(dir);
    return Util.directionNames[(index + n + 8) % 8];
};


module.exports = Util;

