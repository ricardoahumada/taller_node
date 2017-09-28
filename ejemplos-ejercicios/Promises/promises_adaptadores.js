function nodefcall(fn) {
	// rellena el hueco!
}

var fs = require("fs");

nodefcall(fs.readdir, ".")
.then(function(result) {
	console.log(result);
});

nodefcall(fs.stat, ".")
.then(function(result) {
	console.log(result);
});