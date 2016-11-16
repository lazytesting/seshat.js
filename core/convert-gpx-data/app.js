const gpxParse = require('gpx-parse');
const flatten = require('../../utils/flatten')

/**
 * object which contains positional and time info
 * @typedef {Object} TrackPoint - trackpoint object
 * @property {date} TrackPoint.date - datetime of recording
 * @property {number} TrackPoint.ele - elevation in meters
 * @property {number} TrackPoint.lat - latitude
 * @property {number} TrackPoint.lon - longitude
 */

 /**
 * converts GPX data to an array of position objects
 * @param {String} gpxData - GPX document
 * @returns {TrackPoint[]} - list of trackPoint objects
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
