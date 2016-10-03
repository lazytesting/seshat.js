const datareader = require('../../core/read-local-data');
const tdistance = require('../../core/calculate-distance-total');
const timediff = require('../../core/calculate-time-difference');
const speed = require('../../core/calculate-speed');
const maxvalue = require('../../core/lookup-maxvalue');

var points = datareader.Get("../../test/data/test.gpx");

var results =[];

// start from position 1 as we need 2 items to compare
for (var i = 1; i < points.length -1; i++) {
    var time = timediff.Get(points[i-1],points[i]);
    var distance = tdistance.Get(points[i-1],points[i]);

    var item ={};
    item.date = points[i].date;
    item.speed = speed.Get(distance, time);
    results.push(item);
}

var max = maxvalue.Get(results, "speed")
console.log(max);
