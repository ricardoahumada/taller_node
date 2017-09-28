var redis = require("redis");
var client = redis.createClient();

client.set("miClave", "miValor", function(err, val) {
	console.log(arguments);
	client.get("miClave", function(err, value) {
		console.log("valor: ", value);
	});
})