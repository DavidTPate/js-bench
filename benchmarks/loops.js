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

function forEach(arr, func) {
    for (var i = 0, il = arr.length; i < il; i++) {
        func(arr[i]);
    }
}

suite.add({
    name: 'loops#for-check-length',
    fn: function () {
        for (var i = 0; i < arrayToLoop.length; i++) {

        }
    }
}).add({
    name: 'loops#for-check-length-reverse',
    fn: function () {
        for (var i = arrayToLoop.length; i > 0; i--) {

        }
    }
}).add({
    name: 'loops#for-static-length',
    fn: function () {
        for (var i = 0, il = arrayToLoop.length; i < il; i++) {

        }
    }
}).add({
    name: 'loops#for-static-length-reverse',
    fn: function () {
        for (var i = arrayToLoop.length, il = 0; i > il; i--) {

        }
    }
}).add({
    name: 'loops#doWhile-check-length',
    fn: function () {
        var i = 0;
        do {
            i++;
        }
        while (i < arrayToLoop.length);
    }
}).add({
    name: 'loops#doWhile-check-length-reverse',
    fn: function () {
        var i = arrayToLoop.length;
        do {
            i--;
        }
        while (i > 0);
    }
}).add({
    name: 'loops#doWhile-static-length',
    fn: function () {
        var i = 0;
        const il = arrayToLoop.length;
        do {
            i++;
        }
        while (i < il);
    }
}).add({
    name: 'loops#doWhile-static-length-reverse',
    fn: function () {
        var i = 0;
        const il = arrayToLoop.length;
        do {
            i++;
        }
        while (i < il);
    }
}).add({
    name: 'loops#while-check-length',
    fn: function () {
        var i = 0;

        while (i < arrayToLoop.length) {
            i++;
        }
    }
}).add({
    name: 'loops#while-static-length',
    fn: function () {
        var i = 0;
        const il = arrayToLoop.length;

        while (i < il) {
            i++;
        }
    }
}).add({
    name: 'loops#for...in',
    fn: function () {
        for (var char in arrayToLoop) {

        }
    }
}).add({
    name: 'loops#for...of',
    fn: function () {
        for (var char of arrayToLoop) {

        }
    }
}).add({
    name: 'loops#customForEach-arrowFunction',
    fn: function () {
        forEach(arrayToLoop, () => {});
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
}).add({
    name: 'loops#map-function',
    fn: function () {
        arrayToLoop.map(function () {

        });
    }
}).add({
    name: 'loops#map-arrowFunction',
    fn: function () {
        arrayToLoop.map(() => {

        });
    }
}).on('cycle', function onCycle(event) {
    benchmarks.add(event.target);
}).on('complete', function onComplete() {
    benchmarks.log();
}).run();