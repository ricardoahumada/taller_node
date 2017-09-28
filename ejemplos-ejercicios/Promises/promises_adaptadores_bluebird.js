var Promise = require("bluebird"),
fs = require("fs");

var readFileAsync = Promise.promisify(fs.readFile);

readFileAsync("./test.txt")
.then(function(data) {
	console.log("Contenido: ", data.toString());
})
.catch(function(err) {
	console.log("Oops!", err);
});