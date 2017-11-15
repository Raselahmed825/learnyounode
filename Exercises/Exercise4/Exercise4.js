
var value = require('fs');
var value2 = process.argv[2]; 
value.readFile(value2, function (err, val) { 
    if (err)
        return console.log(err);
        
var value3 = val.toString().split('\n').length - 1; 
console.log(value3); 
    
});