'use strict';

var Wall = require('./wall'),
    Tiger = require('./tiger'),
    SmartPlantEater = require('./SmartPlantEater'),
    Plant = require('./plant'),
    LifelikeWorld = require('./LifelikeWorld');

animateWorld(new LifelikeWorld(
  ['####################################################',
   '#                 ####         ****              ###',
   '#   *  @  ##                 ########       OO    ##',
   '#   *    ##        O O                 ****       *#',
   '#       ##*                        ##########     *#',
   '#      ##***  *         ****                     **#',
   '#* **  #  *  ***      #########                  **#',
   '#* **  #      *               #   *              **#',
   '#     ##              #   O   #  ***          ######',
   '#*            @       #       #   *        O  #    #',
   '#*                    #  ######                 ** #',
   '###          ****          ***                  ** #',
   '#       O                        @         O       #',
   '#   *     ##  ##  ##  ##               ###      *  #',
   '#   **         #              *       #####  O     #',
   '##  **  O   O  #  #    ***  ***        ###      ** #',
   '###               #   *****                    ****#',
   '####################################################'],
  {'#': Wall,
   '@': Tiger,
   'O': SmartPlantEater, // from previous exercise
   '*': Plant}
));

