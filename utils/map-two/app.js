/**
 * it's like map but on 2 values of the list
 * @param {Array} array - array of objects
 * @param {Function} callback - bla
 * @returns {Array} - bla
 */
const get = function(array, callback) {
    const results = [];
    for (let i = 1; i <= array.length - 1; i++) {
        results.push(callback(array[i], array[i - 1]));
    }

    return results;
};

module.exports = get;
