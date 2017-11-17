var fltr = require('./filter.js');
var dir = process.argv[2];
var fltrS = process.argv[3];
fltr(dir, fltrS, function (err, list) { 
    if (err) return console.error('Error:', err);
    list.forEach(function (file) {
        console.log(file);
        });
    });