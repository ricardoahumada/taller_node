const fs = require('fs'),
inspect = require('util').inspect;

//Sin diferidos
function readFilePromise(filePath) {
	return new Promise(function(resolve, reject){
		fs.readFile(filePath, function(err, data) {
			if(err){
				return reject(err);
			}
			resolve(data);
		});
	});
}


readFilePromise("./test.txt")
.then(function(contenido) {
	console.log("contenido:", inspect(contenido.toString(),{colors:true}) );
})
.catch(function(err) {
	console.log("ERROR!", err);
});