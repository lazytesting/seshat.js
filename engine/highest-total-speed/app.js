const convertGPX = require('../../core/convert-gpx-data');
const tdistance = require('../../core/calculate-distance-total');
const timediff = require('../../core/calculate-time-difference');
const speed = require('../../core/calculate-speed');
const maxvalue = require('../../core/lookup-maxvalue');

module.exports = {
    Get: function(gpxContent) {
        const points = convertGPX.Get(gpxContent);
        const results = [];
        // start from position 1 as we need 2 items to compare
        for (let i = 1; i < points.length - 1; i++) {
            const time = timediff.Get(points[i - 1], points[i]);
            const distance = tdistance.Get(points[i - 1], points[i]);

            const item = {};
            item.date = points[i].date;
            item.speed = speed.Get(distance, time);
            results.push(item);
        }

        return maxvalue.Get(results, 'speed');
    }
};
