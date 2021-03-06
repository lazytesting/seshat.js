const assert = require('assert');
const gpxData = require('./app.js');
const fs = require('fs');
const path = require('path');

const getTestData = function(relativePath) {
    const filePath = path.join(__dirname, relativePath);

    return fs.readFileSync(filePath, 'utf8');
};

describe('Convert GPX data', () => {

    it('should convert simple gpx to json', () => {
        const content = getTestData('/test/data.gpx');
        const expected = [
            { date: new Date('2015-01-11T14:10:11.000Z'),
            ele: 2182,
            lat: 46.974974,
            lon: 10.311162 },
            { date: new Date('2015-01-11T14:10:12.000Z'),
                ele: 2185,
                lat: 46.97495,
                lon: 10.311144 }
        ];
        const result = gpxData(content);
        assert.deepEqual(result, expected);
    });
    it('should a gpx with multiple tracks', () => {
        const content = getTestData('/test/2tracks.gpx');
        const result = gpxData(content);
        assert.deepEqual(result.length, 4);
    });
});
