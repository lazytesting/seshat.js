const get = function(array, callback) {
    const results = [];
    for (let i = 1; i <= array.length - 1; i++) {
        results.push(callback(array[i], array[i - 1]));
    }

    return results;
};

module.exports = get;
