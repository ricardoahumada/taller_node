const Q = require("q"),
fs = require("fs");

Q.ninvoke(fs, "readFile", "./test.txt")
.then(function(data) {
	console.log("Contenido: ", data.toString());
})
.fail(function(err) {
	console.log("Oops!", err);
});