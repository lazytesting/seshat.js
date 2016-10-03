module.exports = {
    Get : function Get(array, checkKey)
    {
        var result = Math.max.apply(Math,array.map(
            function(o){
                return o[checkKey];
            })
        );
        return result;
    }
}

