const assert = require('assert');
const distance = require('./app.js');

describe('calculate total distance', () => {
        it('should calculate a positive distance', () => {
            var pos1 = {lat: "46.97495", lon: "10.311144", ele: 10};
            var pos2 = {lat: "46.974974", lon: "10.311162", ele: 0};
            assert(distance.Get(pos1,pos2) > 0);
        });
});
