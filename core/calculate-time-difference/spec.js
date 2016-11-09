const assert = require('assert');
const time = require('./app.js');

describe('calculate time difference', () => {
    it('should calculate 1 minute as 60 seconds', () => {
        const pos1 = { date: '2015-01-11T15:10:11.000+01:00' };
        const pos2 = { date: '2015-01-11T15:11:11.000+01:00' };
        const result = time(pos1, pos2);
        assert.deepEqual(result, 60);
    });
});
