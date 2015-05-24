'use strict';

function MultiplicatorUnitFailure() {}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = 'multiplyError';

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5) {
        return a * b;
    }
    else {
        throw new MultiplicatorUnitFailure();
    }
}

function reliableMultiply(a, b) {
    var exception = true;
    var result = null;

    while(exception){
        try {
            exception = false;
            result = primitiveMultiply(a,b);
        } catch(e){
            if(e.name === 'multiplyError'){
                exception = true;
            } else {
                throw e;
            }
        }
    }

    return result;
}

console.log(reliableMultiply(8, 8));
// → 64
