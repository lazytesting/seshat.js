const assert = require('assert');
const angle = require('./app.js');

const pos1 = { lat: '46.974974', lon: '10.311162', ele: 13 };
const pos2 = { lat: '46.97495', lon: '10.311144', ele: 10 };

describe('calculate angle between to points', () => {

    it('should return a positive number', () => {
        const result = angle(pos1, pos2);
        assert(result > 0);
    });
});

