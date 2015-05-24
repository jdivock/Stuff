'use strict';

var Util = require('./util');

function WallFollower(){
    this.dir = 's';
}

WallFollower.prototype.act = function(view){
    var start = this.dir;
    if(view.look(Util.dirPlus(this.dir, -3)) !== ' '){
        start = this.dir = Util.dirPlus(this.dir, 2);
    }

    while( view.look(this.dir) !== ' ' ){
        this.dir = Util.dirPlus(this.dir, 1);
        if(this.dir === start){
            break;
        }
    }
    return {type: 'move', direction: this.dir};
};

module.exports = WallFollower;
