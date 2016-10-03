module.exports = {
    Get : function Get(distance, seconds)
    {
        var metersPerSecond = distance / seconds;
        var speed = metersPerSecond * 3.6;
        return speed;
    }
}