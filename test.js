// Run as:
//  node test.js 2015-01-10.gpx

const gpx = require('fs').readFileSync(process.argv[process.argv.length - 1], 'utf8');
const calc = e => require(`./engine/${e}/app`);

console.log({
    highestSpeed: calc('highest-downhill-speed')(gpx, 5) + ' --48,8',
    totalDownhillDistance: calc('total-downhill-distance')(gpx) +' --12,2',
    averageDownHillSpeed: calc('average-downhill-speed')(gpx)+' --6,7',
    highestAltitude: calc('highest-altitude')(gpx)+' --2484',
    totalDownhillTime: calc('total-downhill-time')(gpx)+' --2h24m',
    highestDownhillSlopeAngle: calc('highest-downhill-slope-angle')(gpx, 10)+' --34'
});
