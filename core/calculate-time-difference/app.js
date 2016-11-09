const get = function(pos1, pos2) {
    const date1 = new Date(pos1.date);
    const date2 = new Date(pos2.date);

    return (date2 - date1) / 1000;
};

module.exports = get;
