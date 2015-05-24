'use strict';

var directions = require('./directions');
var Util = require('./util');

function View(world, vector){
    this.world = world;
    this.vector = vector;
}

View.prototype.look = function(dir){
    var target = this.vector.plus(directions[dir]);
    if(this.world.grid.isInside(target)){
        return Util.charFromElement(this.world.grid.get(target));
    } else {
        return '#';
    }
};

View.prototype.findAll = function(ch){
    var found = [];
    for( var dir in directions){
        if(this.look(dir) === ch){
            found.push(dir);
        }
    }
    return found;
};

View.prototype.find = function(ch){
    var found = this.findAll(ch);
    if(found.legth === 0){
        return null;
    }

    return Util.randomElement(found);
};

module.exports = View;
