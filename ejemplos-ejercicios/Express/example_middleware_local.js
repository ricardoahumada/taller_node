var express = require("express"),
app = express()

function logThis(req, res, next) {
	console.log(" -> ", req.url);
	next();
}

app.get("/", logThis, function(req, res) {
	res.send("Ok!");
})

app.listen(3000);