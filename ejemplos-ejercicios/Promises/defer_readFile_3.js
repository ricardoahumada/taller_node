const fs = require('fs'),
inspect = require('util').inspect;

//Con diferidos
function readFilePromiseDefer(filePath) {
	var defer = Promise.defer();
	fs.readFile(filePath, function(err, data) {
		err ? defer.reject(err) : defer.resolve(data);
	})
	return defer.promise;
}

readFilePromiseDefer("./test.txt")
.then(function(contenido) {
	console.log("contenido:", inspect(contenido.toString(),{colors:true}) );
})
.catch(function(err) {
	console.log("ERROR!", err);
});