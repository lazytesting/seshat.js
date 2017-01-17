const angle = require('./app.js');
const path = require('path');
const fs = require('fs');
const assert = require('assert');

describe('Read and parse data from disk', () => {
    it('should return results', () => {
        const filePath = path.join(__dirname, '/test/data.gpx');
        const gpx = fs.readFileSync(filePath, 'utf8');
        const result = angle(gpx, 5);
        console.log(result);
        assert.ok(result > 0);
    });
});
