/**
 * flattens multidimensional object arrays
 * @param {array} array - an array of complex objects
 * @returns {array} flatArray - object where checkKey has the highest value
 */
const get = function(array) {
    return array.reduce(
        (flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? get(toFlatten) : toFlatten),
        []);
}

module.exports = get;
