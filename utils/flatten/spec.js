const assert = require('assert');
const flatten = require('./app.js');

describe('flatten multi-dimensional arrays', () => {
    it('should flatten a 2d array', () => {
        const expected = [1, 2, 3, 4];
        const actual = flatten([[1, 2], [3, 4]]);
        assert.deepEqual(actual, expected);
    });
    it('should flatten a 3d array', () => {
        const expected = [1, 2];
        const actual = flatten([[[1], [2]]]);
        assert.deepEqual(actual, expected);
    });
    it('should flatten a combined array', () => {
        const expected = [1, 2, 3];
        const actual = flatten([[[1], [2]], 3]);
        assert.deepEqual(actual, expected);
    });
});
