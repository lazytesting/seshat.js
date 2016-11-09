const geolib = require('geolib');

const get = function Get(pos1, pos2) {
    return geolib.getDistance(
        { latitude: pos1.lat, longitude: pos1.lon },
        { latitude: pos2.lat, longitude: pos2.lon }
    );
};

module.exports = get;
