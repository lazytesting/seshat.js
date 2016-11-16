/**
 * object which contains positional and time info
 * @typedef {Object} TrackPoint - trackpoint object
 * @property {Date} TrackPoint.date - datetime of recording
 */

/**
 * calculates the time difference between two points
 * @param {TrackPoint} pos1 - first trackPoint
 * @param {TrackPoint} pos2 - second trackPoint
 * @returns {Number} seconds - time difference in seconds
 */
const get = function(pos1, pos2) {
    const date1 = new Date(pos1.date);
    const date2 = new Date(pos2.date);

    return (date2 - date1) / 1000;
};

module.exports = get;
