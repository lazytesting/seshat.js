const assert = require('assert');
const time = require('./app.js');

describe('calculate time difference', () => {
    it('should calculate 1 minute as 60 seconds', () => {
        var pos1 = {date: "2015-01-11T15:10:11.000+01:00"};
        var pos2 = {date: "2015-01-11T15:10:12.000+01:00"};
        var result = time.Get(pos1,pos2);
        assert(result == 60);
    });
});
