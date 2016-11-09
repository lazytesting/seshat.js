const convertGPX = require('../../core/convert-gpx-data');
const totalDistance = require('../../core/calculate-distance-total');
const mapTwo = require('../../core/map-two');

module.exports = {
    Get: function(gpxContent) {
        const points = convertGPX.Get(gpxContent);
        const distances = mapTwo.Get(points, downhillDistance);

        return distances.reduce((prev, cur) => prev + cur);
    }
};

// add total distance to array when we go down
const downhillDistance = function(current, previous){
    let distance;
    if (previous.ele >= current.ele) {
        distance = totalDistance.Get(previous, current);
    } else {
        distance = 0;
    }

    return distance;
};
