/**
 * calculates the speed in km/h
 * @param {Number} distance - distance in meters
 * @param {Number} seconds - time in seconds
 * @returns {Number} speed - kilometers per hour
 */
const get = function(distance, seconds) {
    const metersPerSecond = distance / seconds;

    return metersPerSecond * 3.6;
};

module.exports = get;
