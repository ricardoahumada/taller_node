var fs = require("fs"),
    readline = require('readline');

console.log("args:",process.argv);

var filename=process.argv[2]?process.argv[2]:"test.txt";
var line_counter=0;

var rd = readline.createInterface({
    input: fs.createReadStream(filename),
    // output: process.stdout,
    console: false
});

rd.on('line', function(line) {
    console.log("line:",line);
    line_counter++;
});

rd.on('close', function() {
    console.log("line_counter:",line_counter);
});
