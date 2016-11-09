const convertGPX = require('../../core/convert-gpx-data');
const totalDistance = require('../../core/calculate-distance-total');
const mapTwo = require('../../core/map-two');

// add total distance to array when we go down
const downhillDistance = function(current, previous){
    let distance;
    if (previous.ele >= current.ele) {
        distance = totalDistance(previous, current);
    } else {
        distance = 0;
    }

    return distance;
};

const get = function(gpxContent) {
    const points = convertGPX(gpxContent);
    const distances = mapTwo(points, downhillDistance);

    return distances.reduce((prev, cur) => prev + cur);
};

module.exports = get;
