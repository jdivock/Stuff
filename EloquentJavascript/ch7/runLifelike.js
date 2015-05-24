'use strict';

var LifelikeWorld = require('./LifelikeWorld');
var Wall = require('./wall');
var PlantEater = require('./plantEater');
var Plant = require('./plant');

var valley = new LifelikeWorld(
  ['############################',
   '#####                 ######',
   '##   ***                **##',
   '#   *##**         **  O  *##',
   '#    ***     O    ##**    *#',
   '#       O         ##***    #',
   '#                 ##**     #',
   '#   O       #*             #',
   '#*          #**       O    #',
   '#***        ##**    O    **#',
   '##****     ###***       *###',
   '############################'],
  {'#': Wall,
   'O': PlantEater,
   '*': Plant}
);
