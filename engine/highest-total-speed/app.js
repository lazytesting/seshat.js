const convertGPX = require('../../core/convert-gpx-data');
const tdistance = require('../../core/calculate-distance-total');
const timediff = require('../../core/calculate-time-difference');
const speed = require('../../core/calculate-speed');
const maxvalue = require('../../core/lookup-maxvalue');
const mapTwo = require('../../core/map-two');

module.exports = {
    Get: function(gpxContent) {
        const points = convertGPX.Get(gpxContent);
        const getDifferences = function(previous, current) {
            const time = timediff.Get(previous, current);
            const distance = tdistance.Get(previous, current);

            return {
                date: current.date,
                speed: speed.Get(distance, time)
            };
        };
        const results = mapTwo.Get(points, getDifferences);

        return maxvalue.Get(results, 'speed');
    }
};
