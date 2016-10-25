const assert = require('assert');
const speed = require('./app.js');

describe('calculate speed', () => {
    it('should calculate km/h correctly', () => {
        const distance = 10;
        const time = 1;
        const result = speed.Get(distance, time);
        assert.deepEqual(result, 36);
    });

    it('should handle 0 distance', () => {
        const distance = 0;
        const time = 1;
        const result = speed.Get(distance, time);
        assert.deepEqual(result, 0);
    });
});
