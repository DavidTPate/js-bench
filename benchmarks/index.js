const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn;

const exe = process.argv[0];

runScripts(fs.readdirSync(__dirname));

function runScripts(fileNames) {
    const fileName = fileNames.shift();

    if (!fileName) return;
    if (!/\.js$/i.test(fileName)) return runScripts(fileNames);
    if (fileName.toLowerCase() === 'index.js') return runScripts(fileNames);

    const fullPath = path.join(__dirname, fileName);

    console.log('> Benchmarking %s', fileName);

    const proc = spawn(exe, [fullPath], {
        'stdio': 'inherit'
    });

    proc.on('exit', function () {
        runScripts(fileNames);
    });
}