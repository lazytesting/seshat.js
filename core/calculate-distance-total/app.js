const hdistance = require('../calculate-distance-horizontal');
const vdistance = require('../calculate-distance-vertical');

const get = function(pos1, pos2){
    const horizontal = hdistance(pos1, pos2);
    const vertical = vdistance(pos1, pos2);

    // w000t finally found out why I had math classes :)
    // a2 + b2 = c2
    const a2 = Math.pow(horizontal, 2);
    const b2 = Math.pow(vertical, 2);
    const c2 = a2 + b2;

    return Math.sqrt(c2);
};

module.exports = get;
