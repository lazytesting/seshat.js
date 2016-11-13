const convertGPX = require('../../core/convert-gpx-data');
const tdistance = require('../../core/calculate-distance-total');
const timediff = require('../../core/calculate-time-difference');
const speed = require('../../core/calculate-speed');
const maxvalue = require('../../utils/lookup-maxvalue');
const mapTwo = require('../../utils/map-two');

const getDifferences = function(previous, current) {
    const time = timediff(previous, current);
    const distance = tdistance(previous, current);

    return {
        date: current.date,
        speed: speed(distance, time)
    };
};

/**
 * returns the highest total (diagonal) speed
 * @param {string} gpxContent - gpx document
 * @returns {number} speed - highest speed
 */
const get = function(gpxContent) {
    const points = convertGPX(gpxContent);
    const results = mapTwo(points, getDifferences);

    return maxvalue(results, 'speed');
};

module.exports = get;
