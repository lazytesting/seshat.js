const assert = require('assert');
const distance = require('./app.js');

describe('calculate the vertical distance between 2 positions', () => {
    it('should calculate a negative distance', () => {
        var pos1 = {ele: 2};
        var pos2 = {ele: 1};
        assert(distance.Get(pos1,pos2) == 1);
    });
    it('should calculate a negstive distance', () => {
        var pos1 = {ele: 1.1};
        var pos2 = {ele: 10};
        assert(distance.Get(pos1,pos2) == -8.9);
    });
});
