const assert = require('assert');
const distance = require('./app.js');

describe('calculate the vertical distance between 2 positions', () => {
    it('should calculate a negative distance', () => {
        const pos1 = { ele: 2 };
        const pos2 = { ele: 1 };
        assert.deepEqual(distance(pos1, pos2), 1);
    });

    it('should calculate a negstive distance', () => {
        const pos1 = { ele: 1.1 };
        const pos2 = { ele: 10 };
        assert.deepEqual(distance(pos1, pos2), -8.9);
    });
});
