var http = require('http');
var fs = require('fs');
var myReadStream = fs.createReadStream('C:\Users\pradn\OneDrive\Desktop\Internet solutions\Hello-World\cs615_nodejs' + '/readMe.txt',
    'utf8');
    myReadStream.on('data', function(chunk){
        console.log('New chunk received:' + chunk);
        });
var myWriteStream = fs.createWriteStream('C:\Users\pradn\OneDrive\Desktop\Internet solutions\Hello-World\cs615_nodejs' + '/writeMe.txt');
    myReadStream.pipe(myWriteStream);