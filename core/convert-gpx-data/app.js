const gpxParse = require('gpx-parse');
const flatten = require('../../utils/flatten')

/**
 * object which contains positional and time info
 * @typedef {Object} trackPoint - trackpoint object
 * @property {date} trackPoint.date - datetime of recording
 * @property {number} trackPoint.ele - elevation in meters
 * @property {number} trackPoint.lat - latitude
 * @property {number} trackPoint.lon - longitude
 */

 /*
 * converts GPX data to an array of position objects
 * @param {string} gpxData - GPX document
 * @returns [{trackPoint}] trackPoints - list of trackPoint objects
 */
const get = function(gpxData) {
    let convertedPoints = [];
    gpxParse.parseGpx(gpxData, (error, data) => {
        const segments = data.tracks.map(track => track.segments);
        const points = flatten(segments);
        convertedPoints = points.map(point => ({
            date: point.time,
            ele: point.elevation,
            lat: point.lat,
            lon: point.lon
        }));
    });

    return convertedPoints;
};

module.exports = get;
