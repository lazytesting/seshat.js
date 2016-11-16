const maxAttitude = require('./app.js');
const path = require('path');
const fs = require('fs');
const assert = require('assert');

describe('Lookup the maximum attitude', () => {
    it('should return the correct value', () => {
        const filePath = path.join(__dirname, '/test/data.gpx');
        const gpx = fs.readFileSync(filePath, 'utf8');
        const result = maxAttitude(gpx);
        assert.deepEqual(result, 2372);
    });
});

