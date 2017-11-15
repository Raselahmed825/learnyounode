var value = require('fs');
var path = require('path'); 
var fldr = process.argv[2]; 
var xt = '.' + process.argv[3]; 
value.readdir(fldr, function (err, value2) { 
    if (err) 
    return console.error(err);
    value2.forEach(function (file) { 
        if (path.extname(file) === xt) { 
            console.log(file);
            } 
        
    }); 
    
});