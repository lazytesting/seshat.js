const assert = require('assert');
const maptwo = require('./app.js');

describe('map each value with the next one in the list', () => {
    it('simple array', () => {
        const testFunction = function(a, b) {
            return a + b;
        };
        const list = [1, 2, 5];
        const result = maptwo(list, testFunction);
        const expected = [3, 7];
        assert.deepEqual(result, expected);
    });
});
