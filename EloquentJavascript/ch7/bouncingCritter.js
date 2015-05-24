'use strict';

var Util = require('./Util');


function BouncingCritter(){
    this.direction = Util.randomElement(Util.directionNames);
}

BouncingCritter.prototype.act = function(view){
    if(view.look(this.direction) !== ' '){
        this.direction = view.find(' ') || 's';
    }

    return { type: 'move', direction: this.direction};
};

module.exports = BouncingCritter;
