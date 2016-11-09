const get = function(distance, seconds) {
    const metersPerSecond = distance / seconds;

    return metersPerSecond * 3.6;
};

module.exports = get;
