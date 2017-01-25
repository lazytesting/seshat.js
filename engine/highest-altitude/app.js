const convertGPX = require('../../core/convert-gpx-data');
const lookupMax = require('../../utils/lookup-maxvalue');

const get = function(gpxContent) {
    const points = convertGPX(gpxContent);

    return lookupMax(points, 'ele');
};

module.exports = get;
