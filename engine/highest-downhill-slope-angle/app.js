const convertGPX = require('../../core/convert-gpx-data');
const calculateAngle = require('../../core/calculate-angle');

const createReduce = horizontalDistance => (carry, item, blabla, array) => {
    const index = carry.length - 1;
    const partStartEle = index > 0 ? (carry[index][0] ? carry[index][0].ele : 0) : array[0].ele;

    const thing = partStartEle - item.ele;
    const thing2 = Math.abs(thing);

    if (thing2 >= horizontalDistance) {
        // clone last array minus first item of that array into new array
        let lastArray = [];
        for (let i = 0; i < carry[index].length; i++) {
            if (carry[index][i] >= (carry[index][i - 1] + horizontalDistance)) {
                lastArray = carry[index].slice(i - 1);
                break;
            }
        }

        // remove all but the first item (save mem)
        carry[index] = carry[index].splice(0, 1);

        // push last item
        carry[index].push(item);
        lastArray.push(item);

        carry.push(lastArray);
    } else {
        carry[index].push(item);
    }

    return carry;
}

/**
 * returns the total downhill distance of the track
 * @param {String} gpxContent - gpx document
 * @param {Number} horizontalDistance - minimum height difference to calculate average over
 * @returns {Number} anlge - maximum slope angle
 */
const get = function(gpxContent, horizontalDistance) {
    const points = convertGPX(gpxContent);
    const distances = points.reduce(createReduce(horizontalDistance), [[]]);
    const angles = distances.map(ele => calculateAngle(ele[0], ele[ele.length - 1]));

    return angles.reduce((carry, item) => Math.max(carry, item), angles.shift());
};

module.exports = get;
