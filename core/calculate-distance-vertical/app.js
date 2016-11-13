/**
 * object which contains positional and time info
 * @typedef {Object} trackPoint - trackpoint object
 * @property {number} trackPoint.ele - elevation in meters
 */

/*
 * calculates the horizontal distance between two points
 * @param {trackPoint} pos1 - first position
 * @param {trackPoint} pos2 - second position
 * @returns {number} distance - distance in meters
 */
const get = function(pos1, pos2) {
    return pos1.ele - pos2.ele;
};

module.exports = get;
