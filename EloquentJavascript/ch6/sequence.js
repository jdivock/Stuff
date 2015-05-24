'use strict';

function Sequence(){
    this.current = null;
}

Sequence.prototype.next = function(){
};

Sequence.prototype.isEmpty = function(){
};



function logFive(sequence){
    
    var i = 0;

    while(!sequence.isEmpty() && i < 5){
        console.log(sequence.current);
        sequence.next();
        i++;
    }
}

function ArraySeq(array){
    this.index = 0;
    this.val = array;
    this.current = array[this.index];
}

ArraySeq.prototype.next = function(){
    this.current = this.val[++this.index];
};

ArraySeq.prototype.isEmpty = function(){
    return !this.current;
};

function RangeSeq(start, end){
    this.current = start;
    this.start = start;
    this.end = end;
}

RangeSeq.prototype.next = function(){
    this.current++;
};

RangeSeq.prototype.isEmpty = function(){
    if(this.current > this.end){
        return true;
    } else {
        return false;
    }
};


logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
