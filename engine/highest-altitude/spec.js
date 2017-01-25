const maxAltitude = require('./app.js');
const path = require('path');
const fs = require('fs');
const assert = require('assert');

describe('Lookup the maximum altitude', () => {
    it('should return the correct value', () => {
        const filePath = path.join(__dirname, '/test/data.gpx');
        const gpx = fs.readFileSync(filePath, 'utf8');
        const result = maxAltitude(gpx);
        assert.deepEqual(result, 2372);
    });
});

