const hdistance = require('../calculate-distance-horizontal');
const vdistance = require('../calculate-distance-vertical');

module.exports = {
    Get : function Get(pos1, pos2)
    {
        var horizontal = hdistance.Get(pos1, pos2);
        var vertical = vdistance.Get(pos1,pos2);

        // w000t finally found out why I had math classes :)
        // a2 + b2 = c2
        var a2 = Math.pow(horizontal,2);
        var b2 = Math.pow(vertical,2);
        var c2 = a2 + b2;
        var distance = Math.sqrt(c2);

        return distance;
    }
}