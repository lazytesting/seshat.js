const convertGPX = require('../../core/convert-gpx-data');
const totalDistance = require('../../core/calculate-distance-total');
const calculateTime = require('../../core/calculate-time-difference');
const calculateSpeed = require('../../core/calculate-speed');
const filterDownhill = require('../../core/filter-downhill');

/**
 * returns the total downhill distance of the track
 * @param {String} gpxContent - gpx document
 * @returns {Number} distance - distance in meters
 */
const get = function(gpxContent) {
    const points = convertGPX(gpxContent);
    const distance = filterDownhill(points, totalDistance);
    const duration = filterDownhill(points, calculateTime)

    return calculateSpeed(distance, duration);
};

module.exports = get;
