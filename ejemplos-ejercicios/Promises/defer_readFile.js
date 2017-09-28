const fs = require('fs'),
	inspect = require('util').inspect;

function readFilePromise(filePath) {
	var defer = Promise.defer();

	var promise = defer.promise;

	var data = '';

	readStream = fs.createReadStream(filePath, {
		flags: "r",
		encoding: "ascii",
		autoClose: true
	});

	readStream.on("data", function(chunk) {
		console.log("He leído:", chunk);
		data+= chunk;
	});

	readStream.on('error', function(event) {
		console.log('No existe!');
		defer.reject('No existe!');
	});

	readStream.on("end", function() {
		console.log("ya está");
		defer.resolve(data);
	});

	return promise;
}

readFilePromise("./test.txt").then(function(contenido) {
	console.log("contenido:", inspect(contenido,{colors: true}));
}, function(err) {
	console.log("ERROR!", err);
});