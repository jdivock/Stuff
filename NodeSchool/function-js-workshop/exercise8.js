module.exports = function duckCount(){

	return Array.prototype.reduce.call(arguments, function(duckCount, curr){
		return Object.prototype.hasOwnProperty.call(curr, 'quack') ? duckCount + 1 : duckCount;
	}, 0);

};


function theirDuckCount() {
        return Array.prototype.slice.call(arguments).filter(function(obj) {
          return Object.prototype.hasOwnProperty.call(obj, 'quack');
        }).length;
}