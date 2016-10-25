const assert = require('assert');
const maxvalue = require('./app.js');

describe('lookup max value in an array', () => {
    it('should return the highest value', () => {
        const array = [
            {
                field1: 1,
                field2: 20
            },
            {
                field1: 2,
                field2: 10
            }];

        const result = maxvalue.Get(array, 'field2');
        assert(result, 20);
    });
});
