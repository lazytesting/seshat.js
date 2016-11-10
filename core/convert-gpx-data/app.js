const gpxParse = require('gpx-parse');

const get = function(gpxData) {
    let convertedPoints = [];

    gpxParse.parseGpx(gpxData, (error, data) => {
        const points = data.tracks.map(track => track.segments.map(segment => segment));
        convertedPoints = points[0][0].map(point => ({
            date: point.time,
            ele: point.elevation,
            lat: point.lat,
            lon: point.lon
        }));
    });

    return convertedPoints;
};

module.exports = get;
