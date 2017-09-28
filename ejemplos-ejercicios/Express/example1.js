var express = require("express");

var app = express();

app.get("/", function(req, res) {
	console.log(req,res);
	res.end("Hola desde express!");
});

app.get("/user/:id", function(req, res) {
	res.end(req.params.id);
});

app.get("/search", function(req, res) {
	// GET /search?text=nodejs+express
	res.end(req.query.text);
});

app.listen(3000);