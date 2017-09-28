var Promise = require("bluebird"),
MongoDB = Promise.promisifyAll(require("mongodb")),
MongoClient = MongoDB.MongoClient,
ObjectID = require("mongodb").ObjectID;

var url = "mongodb://127.0.0.1:27017/testdb"
var client = MongoClient.connectAsync(url);

client.then(function(db){
	var collection = db.collection("micoleccion");
	collection.insertAsync({ uno: "Uno", dos: "dos"})
	.then(function(){
		return collection.findOne({uno:"Uno"}, function(err, result) {
			if (err) throw err;
			console.log("result:",result);
			db.close();
		});
	});
});