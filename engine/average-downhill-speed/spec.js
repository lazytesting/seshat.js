const averageSpeed = require('./app.js');
const path = require('path');
const fs = require('fs');
const assert = require('assert');

describe('Calculate the average downhill speed', () => {
    it('should return a positive integer', () => {
        const filePath = path.join(__dirname, '/test/data.gpx');
        const gpx = fs.readFileSync(filePath, 'utf8');
        const result = averageSpeed(gpx);
        assert.ok(result > 0);
    });
});

