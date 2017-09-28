var Promise = require("bluebird"),
MongoDB = Promise.promisifyAll(require("mongodb")),
MongoClient = MongoDB.MongoClient,
ObjectID = require("mongodb").ObjectID;

var url = "mongodb://127.0.0.1:27017/dbname"
var client = MongoClient.connectAsync(url);

client.then(function(db){
	console.log("Conectado!");
}).catch(function(e) {
	console.log("ERROR conectando a Mongo: ", e)
});