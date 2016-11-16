/**
 * object which contains positional and time info
 * @typedef {Object} TrackPoint - trackpoint object
 * @property {Number} TrackPoint.ele - elevation in meters
 */

/**
 * calculates the horizontal distance between two points
 * @param {TrackPoint} pos1 - first position
 * @param {TrackPoint} pos2 - second position
 * @returns {Number} distance - distance in meters
 */
const get = function(pos1, pos2) {
    return pos1.ele - pos2.ele;
};

module.exports = get;
