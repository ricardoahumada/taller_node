var redis = require("redis"),
	Promise = require("bluebird"),
	client = redis.createClient();

Promise.promisifyAll(redis);

client.setAsync("miClave", JSON.stringify({un:"Objeto"}))
.then(function(val) {
	console.log(val);
	return client.getAsync("miClave");
})
.then(JSON.parse)
.then(function(val){ console.log(val) });