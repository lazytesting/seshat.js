const convertGPX = require('../../core/convert-gpx-data');
const timeDifference = require('../../core/calculate-time-difference');
const filterDownhill = require('../../core/filter-downhill');

/**
 * returns the total downhill time of the track
 * @param {String} gpxContent - gpx document
 * @returns {Number} time - elapsed time in seconds
 */
const get = function(gpxContent) {
    const points = convertGPX(gpxContent);

    return filterDownhill(points, timeDifference);
};

module.exports = get;
