const assert = require('assert');
const data = require('./app.js');

describe('Read and parse data from disk', () => {
    it('should return results', () => {
        var path = "./test/data.gpx"
        assert(data.Get(path) != null);
    });
});
