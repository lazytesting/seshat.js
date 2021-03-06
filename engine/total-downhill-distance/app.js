const convertGPX = require('../../core/convert-gpx-data');
const totalDistance = require('../../core/calculate-distance-total');
const filterDownhill = require('../../core/filter-downhill');

/**
 * returns the total downhill distance of the track
 * @param {String} gpxContent - gpx document
 * @returns {Number} distance - distance in meters
 */
const get = function(gpxContent) {
    const points = convertGPX(gpxContent);

    return filterDownhill(points, totalDistance);
};

module.exports = get;
