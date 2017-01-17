const convertGPX = require('../../core/convert-gpx-data');
const timeDiff = require('../../core/calculate-time-difference');
const calculateAngle = require('../../core/calculate-angle');

const createReduce = seconds => (carry, item) => {
    const index = carry.length - 1;
    const partStart = carry[index][0] || 0;

    if (timeDiff(partStart, item) >= seconds) {
        // push last item
        carry[index].push(item);

        // clone last array minus first item of that array into new array
        const lastArray = JSON.parse(JSON.stringify(carry[index]));

        lastArray.shift();

        carry.push(lastArray);
    } else {
        carry[index].push(item);
    }

    return carry;
}

/**
 * returns the total downhill distance of the track
 * @param {String} gpxContent - gpx document
 * @param {Number} seconds - timeframe to calculate average
 * @returns {Number} anlge - maximum slope angle
 */
const get = function(gpxContent, seconds) {
    const points = convertGPX(gpxContent);
    const distances = points.reduce(createReduce(seconds), [[]]);
    const angles = distances.map(ele => calculateAngle(ele[0], ele[ele.length - 1]) * -1);

    return Math.max(...angles);
};

module.exports = get;
