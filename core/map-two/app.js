module.exports = {
    Get: function(array, callback) {
        const results = [];
        for (let i = 1; i <= array.length - 1; i++) {
            results.push(callback(array[i], array[i - 1]));
            console.log('hit');
        }

        return results;
    }
};