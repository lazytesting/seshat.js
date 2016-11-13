const glob = require('glob');
const execSync = require('child_process').execSync;

const install = function(path) {
    console.log('installing dependencies for ', path)
    execSync('npm i', {
        cwd: path
    });
}

glob('{core,engine,utils}/*', (er, files) => files.map(file => install(file)));


