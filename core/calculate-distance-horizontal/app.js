const geolib = require('geolib');

module.exports = {
    Get : function Get(pos1, pos2)
    {
        var distance =
            geolib.getDistance(
                {latitude: pos1.lat, longitude: pos1.lon},
                {latitude: pos2.lat, longitude: pos2.lon}
            );
        return distance;
    }
}