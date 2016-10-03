module.exports = {
    Get : function Get(pos1, pos2)
    {
        var ele1 = pos1.ele;
        var ele2 = pos2.ele;
        var distance = ele1 - ele2;

        return distance;
    }
}