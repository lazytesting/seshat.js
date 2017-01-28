const assert = require('assert');
const angle = require('./app.js');

const pos1 = { lat: '46.975419', lon: '10.311633', ele: 13 };
const pos2 = { lat: '46.975569', lon: '10.31181', ele: 6 };

describe('calculate angle between to points', () => {

    it('should return a positive number', () => {
        const result = angle(pos1, pos2);
        assert(result > 17);
        assert(result < 19);
    });
});

