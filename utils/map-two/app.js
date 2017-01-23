'use strict';

/**
 * @callback TwoValueCallback
 * @param {*} previous
 * @param {*} current
 */

/**
 * it's like map but on 2 values of the list
 * @param {Array} array - array of objects
 * @param {TwoValueCallback} callback - the calbback which is executed over 2 points
 * @returns {Array} - results
 */
const get = function(array, callback) {
    const results = [];
    for (let i = 1; i <= array.length - 1; i++) {
        results.push(callback(array[i - 1], array[i]));
    }

    return results;
};

module.exports = get;
