    module.exports = function arrayMap(arr, fn) {
        // SOLUTION GOES HERE

        return arr.reduce(function(col, curr) {
            return col.concat(fn(curr));
        }, []);
    };


    // THEIRS

   function map(arr, fn) {
        return arr.reduce(function(acc, item, index, arr) {
            return acc.concat(fn(item, index, arr));
        }, []);
    }
