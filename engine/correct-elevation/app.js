const convert = require('xml-js');
const fs = require('fs');



const chunkArray = function(groupsize, array) {
    var sets = [], chunks, i = 0;
    chunks = array.length / groupsize;
    while(i < chunks){
        sets[i] = array.splice(0,groupsize);
        i++;
    }
    return sets;
};

const get = function(gpxContent, ) {

    const googleMaps = require('@google/maps').createClient({
        key: mapsApiKey
    });

// gpx file parsen
    const xml = fs.readFileSync(orginalPath, 'utf8');
    const jsonresult = convert.xml2json(gpxContent);

// get array met ele
    const originalJson = JSON.parse(jsonresult);
    const elements = originalJson.elements[0].elements[1].elements[1].elements;
    const todoElevationAPI = elements.map(ele => ({lat: ele.attributes.lat, lng: ele.attributes.lon}));

// door google ding heen
    const requestChunks = chunkArray(200, todoElevationAPI);
    const elements2 = [];
    let doneActions = 0;
    requestChunks.forEach((list, chunkIndex) => {
        googleMaps.elevation({locations: list}, (err, response) => {

            if (err) return console.log('err', err);

            // array > corrigeren
            elements2.push({
                chunkIndex,
                elements: response.json.results.map(res => ({elevation: res.elevation}))
            });

            doneActions++;
            if (doneActions >= requestChunks.length) {
                done();
            }
        });
    });

// array terug naar object
    function done() {
        let elements3 = [];
        for (var i = 0; i < elements2.length; i++) {
            elements3 = elements3.concat(elements2.find(chunk => chunk.chunkIndex === i).elements);
        }
        //console.log(elements3)

        // replace in-place in original array
        elements.forEach((node, index) => {
            elements[index].elements[0].elements[0].text = (elements3[index].elevation + '');
        });

        // terugconvert
        const newJson = JSON.stringify(originalJson);
        // console.log(newJson);
        const xml2 = convert.json2xml(newJson, {spaces: 4});

        fs.writeFile(orginalPath, xml2);
    }

}

module.exports = get;