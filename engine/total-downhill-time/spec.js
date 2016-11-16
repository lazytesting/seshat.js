const time = require('./app.js');
const path = require('path');
const fs = require('fs');
const assert = require('assert');

describe('total downhill time', () => {
    it('should return a positive number', () => {
        const filePath = path.join(__dirname, '/test/data.gpx');
        const gpx = fs.readFileSync(filePath, 'utf8');
        const result = time(gpx);

        assert.notEqual(result, null);
    });
});
