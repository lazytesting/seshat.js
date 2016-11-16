const assert = require('assert');
const filterDownhill = require('./app.js');

describe('execute a function over all the downhill items and get the sum of the results', () => {
    const testFunc = (a, b) => a.val + b.val;

    it('should calculate a negative distance', () => {
        const items = [
            { ele: 10, val: 1 },
            { ele: 9, val: 2 },
            { ele: 8, val: 3 },
            { ele: 9, val: 4 }
        ]

        const actual = filterDownhill(items, testFunc);

        assert.deepEqual(actual, 8);
    });
});
