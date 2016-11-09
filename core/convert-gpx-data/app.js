const xml2js = require('xml2js');

const get = function(gpxData) {
    const json = xml2JSON(gpxData);

    return getDataPoints(json);
};

var xml2JSON = function (xml){
    var parser = new xml2js.Parser();
    var json;
    parser.parseString(xml, function (err, result) {
        json = result;
    });
    return json;
}

var getDataPoints = function(json) {
    var result = json["gpx"]["trk"][0]["trkseg"][0]["trkpt"];
    var formated = result.map(function(obj){
        var item = {};
        item.date = obj.time[0];
        item.ele = obj.ele[0];
        item.lat = obj.$.lat;
        item.lon = obj.$.lon;
        return item;
    });
    return formated;
}

module.exports = get;
