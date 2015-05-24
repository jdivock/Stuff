// Skewer test stuff

console.log = skewer.log;
function foo(hi){
    console.log('sup');
}

foo("stuff");


var rabbit = {};

rabbit.speak = function(text){
    console.log("The rabbit says " + text);
};

rabbit.speak("yo");


var protoRabbit = {
    speak: function(text){
        console.log(this.type + " says " + text);
    }
}

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';

killerRabbit.speak('aaaaah!');

function Rabbit(type){
    this.type = type;
}

var rab1 = new Rabbit('heavy');

Rabbit.prototype.speak = function(speak){
    console.log('The ' + this.type + " rabbit says: " + speak);
};

rab1.speak('hi');



