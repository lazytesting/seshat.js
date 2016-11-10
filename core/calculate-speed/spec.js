const assert = require('assert');
const speed = require('./app.js');

describe('calculate speed', () => {
    it('should calculate km/h correctly', () => {
        const result = speed(10, 1);
        assert.deepEqual(result, 36);
    });

    it('should handle 0 distance', () => {
        const result = speed(0, 1);
        assert.deepEqual(result, 0);
    });
});
