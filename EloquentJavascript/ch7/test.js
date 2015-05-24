'use strict';

var Grid = require('./grid');
var Vector = require('./vector');
var World = require('./world');
var Wall = require('./wall');
var BouncingCritter = require('./bouncingCritter');
var plan = require('./plan');

var grid = new Grid(5,5);

console.log(grid.get(new Vector(1,1)));

grid.set(new Vector(1,1), 'X');

console.log('getting again', grid.get(new Vector(1,1)));

var world = new World(plan, {'#': Wall,
                             'o': BouncingCritter});

console.log(world.toString());

for( var i = 0; i < 5; i++){
    world.turn();
    console.log(world.toString());
}
