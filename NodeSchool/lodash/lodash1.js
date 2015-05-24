var _ = require('lodash');

function filterWhere(list) {

    return _.where(list, {
        active: true
    });
}

function sortDesc(list) {

    return _.sortBy(list, function(val, index, col) {
        return -val.quantity;
    });
}

function forEachObj(list) {

    _.forEach(list, function(val, idx) {
        var size;
        if (val.population > 1) {
            size = 'big';
        } else if (val.population > 0.5) {
            size = 'med';
        } else {
            size = 'small';
        }

        list[idx].size = size;

    });

    return list;
}

function everySome(list) {
    weather = {
        hot: [],
        warm: []
    };

    function tmpChk(temp) {
        return temp > 19;
    }

    _.forEach(list, function(val, key) {

        if (_.every(val, tmpChk)) {
            weather.hot.push(key);
        } else if (_.some(val, tmpChk)){
        	weather.warm.push(key);
        }


    });


    return weather;
}

function groupSize(list){
	var grouped = _.groupBy(list, 'username');

	var ret = [];

	_.forEach(grouped, function(val, key){
		ret.push({username: key, comment_count: _.size(val)});
	});

	return _.sortBy(ret, function(val){
		return -val.comment_count;
	});
}

module.exports = groupSize;
