var fs = require('fs');
var FILE_PATH_READ = './text.txt';
var FILE_PATH_WRITE = './text2.txt';

var fileContent = fs.readFileSync(FILE_PATH_READ, { encoding: 'utf8'});
console.log(fileContent);

var output = Math.round(Math.random()*10);
fs.writeFileSync(FILE_PATH_WRITE, output);


// var content = 'Very First Line';
