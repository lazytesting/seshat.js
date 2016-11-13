/**
 * @param {array} array - an array of objects
 * @param {string} checkKey - name of the attribute where to check on
 * @returns {*} - object where checkKey has the highest value
 */
const get = function(array, checkKey) {
    return Math.max.apply(Math, array.map(o => o[checkKey])
    );
};

module.exports = get;
