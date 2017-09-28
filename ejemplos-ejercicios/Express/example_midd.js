var express = require("express");

var app = express();

/*app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser());
*/
app.use(express.cookieParser());
app.use(express.cookieSession({secret: "secreto"}));

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
	// console.log(req,res);
	console.log("Cookies",req.cookies);
	req.session.visitas || (req.session.visitas = 0);
	var n = req.session.visitas++;
	res.send("Me has visitado: " + n + " veces!");
});

app.get("/user/:id", function(req, res) {
	res.end(req.params.id);
});

app.get("/search", function(req, res) {
	// GET /search?text=nodejs+express
	res.end(req.query.text);
});

app.listen(3000);