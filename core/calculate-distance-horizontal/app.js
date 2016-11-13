const geolib = require('geolib');

/**
 * object which contains positional and time info
 * @typedef {Object} trackPoint - trackpoint object
 * @property {number} trackPoint.lat - latitude
 * @property {number} trackPoint.lon - longitude
 */

/*
 * calculates the horizontal distance between two points
 * @param {trackPoint} pos1 - first position
 * @param {trackPoint} pos2 - second position
 * @returns {number} distance - distance in meters
 */
const get = function Get(pos1, pos2) {
    return geolib.getDistance(
        { latitude: pos1.lat, longitude: pos1.lon },
        { latitude: pos2.lat, longitude: pos2.lon }
    );
};

module.exports = get;
