var express = require("express"),
app = express();

app.set("views", "./views");
app.set("view engine", "jade");

app.get("/", function(req, res) {
	res.render("welcome", {user: "Pepito"});
});

app.use(function(req, res, next) {
	console.log(" * %s: %s %s",
		req.connection.remoteAddress,
		req.method,
		req.url);
	next();
});

app.listen(3000)