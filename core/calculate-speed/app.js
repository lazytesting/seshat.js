/**
 * calculates the speed in km/h
 * @param {number} distance - distance in meters
 * @param {number} seconds - time in seconds
 * @returns {number} speed - kilometers per hour
 */
const get = function(distance, seconds) {
    const metersPerSecond = distance / seconds;

    return metersPerSecond * 3.6;
};

module.exports = get;
