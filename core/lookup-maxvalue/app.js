module.exports = {
    Get: function Get(array, checkKey)
    {
        return Math.max.apply({}, array.map(o => o[checkKey]));
    }
};

