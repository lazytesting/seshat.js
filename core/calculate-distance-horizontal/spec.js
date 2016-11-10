const assert = require('assert');
const hdistance = require('./app.js');

const pos1 = { lat: '46.974974', lon: '10.311162' };
const pos2 = { lat: '46.97495', lon: '10.311144' };

describe('calculate distance horizontal', () => {
    it('should return a positive result', () => {
        const result = hdistance(pos1, pos2);
        assert(result > 0);
    });

    it('should not return a negative value', () => {
        const result = hdistance(pos2, pos1);
        assert(result > 0);
    });
});

