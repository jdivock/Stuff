'use strict';

function SmartPlantEater(){
    this.energy = 20;
    this.age = 0;
    this.lastDir = null;
}

SmartPlantEater.prototype.act = function(context){
    var spaces = context.findAll(' ');
    var space = null;
    if(spaces.indexOf(this.lastDir) >= 0){
        space = this.lastDir;
    } else {
        space = context.find(' ');
    }
    this.age++;
    if(this.energy > 60 && this.age < 75 && space){
        return {type: 'reproduce', direction: space};
    }
    var plant = context.find('*');

    if(plant && this.energy < 75){
        return {type: 'eat', direction: plant};
    }
    if(space){
        return {type: 'move', direction: space};
    }
};


module.exports = SmartPlantEater;
