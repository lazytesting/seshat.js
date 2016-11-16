/**
 * flattens multidimensional object arrays
 * @param {Array} array - an array of complex objects
 * @returns {Array} flatArray - object where checkKey has the highest value
 */
const get = function(array) {
    return array.reduce(
        (flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? get(toFlatten) : toFlatten),
        []);
}

module.exports = get;
