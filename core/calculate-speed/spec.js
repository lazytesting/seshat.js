const assert = require('assert');
const speed = require('./app.js');

describe('calculate speed', () => {
    it('should calculate km/h correctly', () => {
        var distance = 10;
        var time = 1;
        var result = speed.Get(distance,time);
        assert(result == 36);
    });

    it('should handle 0 distance', () => {
        var distance = 0;
        var time = 1;
        var result = speed.Get(distance,time);
        assert(result == 0);
    });
});
