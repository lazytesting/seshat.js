module.exports = {
    Get : function Get(pos1, pos2)
    {
        var date1 = new Date(pos1.date);
        var date2 = new Date(pos2.date);
        var seconds = (date2 - date1) / 1000;
        return seconds;
    }
}