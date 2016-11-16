const mapTwo = require('../../utils/map-two');

/**
 * object which contains positional and time info
 * @typedef {Object} TrackPoint - trackpoint object
 * @property {date} TrackPoint.date - datetime of recording
 * @property {number} TrackPoint.ele - elevation in meters
 * @property {number} TrackPoint.lat - latitude
 * @property {number} TrackPoint.lon - longitude
 */

/**
 * @callback PositionsCallback
 * @param {TrackPoint} pos1
 * @param {TrackPoint} pos2
 */

/**
 * executes a function over the items which are downhill
 * @param {TrackPoint[]} trackPoints - array of objects
 * @param {PositionsCallback} callback - function which is executed
 * @returns {number} result - sum of results
 */
const get = function(trackPoints, callback) {
    const downHillFilter = (pos1, pos2) => pos1.ele >= pos2.ele ? callback(pos1, pos2) : 0;
    const downhillItems = mapTwo(trackPoints, downHillFilter);

    return downhillItems.reduce((prev, cur) => prev + cur);
}

module.exports = get;
