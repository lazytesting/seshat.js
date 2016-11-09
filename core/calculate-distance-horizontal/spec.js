const assert = require('assert');
const hdistance = require('./app.js');

describe('calculate distance horizontal', () => {
    it('should return a positive result', () => {
        const pos1 = { lat: '46.974974', lon: '10.311162' };
        const pos2 = { lat: '46.97495', lon: '10.311144' };
        const result = hdistance(pos1, pos2);
        assert(result > 0);
    });

    it('should not return a negative value', () => {
        const pos1 = { lat: '46.97495', lon: '10.311144' };
        const pos2 = { lat: '46.974974', lon: '10.311162' };
        const result = hdistance(pos1, pos2);
        assert(result > 0);
    });
});
