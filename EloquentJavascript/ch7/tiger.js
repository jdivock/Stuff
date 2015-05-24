'use strict';

function Tiger(){
    this.energy = 120;
    this.lastDir = null;
}

Tiger.prototype.act = function(context){
    var space = null;
    var spaces = context.findAll(' ');
    
    if( spaces.indexOf(this.lastDir) >= 0){
        space = this.lastDir;
    } else {
        space = context.find(' ');
    }
    
    if(this.energy > 150 && space){
        this.lastDir = null;
        return {type: 'reproduce', direction: space};
    }

    var prey = context.find('O');

    if(prey && this.energy < 120){
        this.lastDir = null;
        return {type: 'eat', direction: prey};
    }
    if(space){
        this.lastDir = space;
        return {type: 'move', direction: space};
    }
};
