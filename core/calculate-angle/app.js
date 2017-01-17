const hdistance = require('../calculate-distance-horizontal');
const vdistance = require('../calculate-distance-vertical');

// TODO documentation
const get = function Get(pos1, pos2) {
    const horizontal = hdistance(pos1, pos2);
    const vertical = vdistance(pos1, pos2);

    return calculateAngle(vertical, horizontal);
};


// TODO check axis
const calculateAngle = function(x, y)
{
    const tan = Math.atan2(x, y);

    return tan * (180 / Math.PI);
}

module.exports = get;
