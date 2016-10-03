const assert = require('assert');
const hdistance = require('./app.js');

describe('calculate distance horizontal', () => {
    it('should return a positive result', () => {
        var pos1 = {lat: "46.974974", lon: "10.311162"};
        var pos2 = {lat: "46.97495", lon: "10.311144"};
        var result = hdistance.Get(pos1,pos2);
        assert(result > 0);
    });

    it('should not return a negative value', () => {
        var pos1 = {lat: "46.97495", lon: "10.311144"};
        var pos2 = {lat: "46.974974", lon: "10.311162"};
        var result = hdistance.Get(pos1,pos2);
        assert(result > 0);
    });

    it('should handle a 0 result', () => {
        var pos1 = {lat: "46.974974", lon: "10.311162"};
        var result = hdistance.Get(pos1,pos1);
        assert(result == 0);
    });
});
