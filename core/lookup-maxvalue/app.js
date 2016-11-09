const get = function(array, checkKey){
    return Math.max.apply(Math, array.map(o => o[checkKey])
    );
};

module.exports = get;
