var fs = require("fs");

console.log("args:",process.argv);

var filename=process.argv[2]?process.argv[2]:"test.txt";

var readStream = fs.createReadStream(filename, {
	flags: "r",
	encoding: "ascii",
	autoClose: true
});

readStream.on("data", function(chunk) {
	console.log("He leído:", chunk);
	console.log("He leído:", chunk.length);
});

readStream.on("end", function() {
	console.log("ya está");
});