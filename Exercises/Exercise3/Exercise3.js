var value = require('fs'); 

var value2 = value.readFileSync(process.argv[2]); 

var value3 = value2.toString().split('\n').length - 1;

console.log(value3);