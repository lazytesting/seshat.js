const assert = require('assert');
const data = require('./app.js');
const fs = require('fs');
const path = require('path');

describe('Convert GPX data', () => {
    it('should convert simple gpx to json', () => {
        const filePath = path.join(__dirname, '/test/data.gpx');
        const content = fs.readFileSync(filePath, 'utf8');

        const expected = [
            { date: '2015-01-11T15:10:11.000+01:00',
            ele: '2182.0',
            lat: '46.974974',
            lon: '10.311162' },
            { date: '2015-01-11T15:10:12.000+01:00',
                ele: '2185.0',
                lat: '46.97495',
                lon: '10.311144' }
        ];
        const result = data.Get(content);

        assert.deepEqual(result, expected);
    });
});
