'use strict';
const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');
const suite = new Benchmark.Suite;

const charCodes = [];
// Build a set of ASCII character codes from 32 (space) to 126 (tilde)
for (var i = 32, il = 127; i < il; i++) {
    charCodes.push(i);
}

// Get an array of characters.
const arrayToLoop = String.fromCharCode.apply(null, [].concat(charCodes, charCodes, charCodes, charCodes, charCodes)).split('');

suite.add({
    name: 'loops#for-check-length',
    fn: function () {
        for (var i = 0; i < arrayToLoop.length; i++) {

        }
    }
}).add({
    name: 'loops#for-static-length',
    fn: function () {
        for (var i = 0, il = arrayToLoop.length; i < il; i++) {

        }
    }
}).add({
    name: 'loops#forEach-function',
    fn: function () {
        arrayToLoop.forEach(function () {

        });
    }
}).add({
    name: 'loops#forEach-arrowFunction',
    fn: function () {
        arrayToLoop.forEach(() => {

        });
    }
}).on('cycle', function onCycle(event) {
    benchmarks.add(event.target);
}).on('complete', function onComplete() {
    benchmarks.log();
}).run();