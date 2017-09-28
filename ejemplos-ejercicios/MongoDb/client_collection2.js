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
		return collection.find({}).toArrayAsync();
	}).then((data)=>{
		console.log("result:",data);
		db.close();
	});
})
.catch((err)=>{
	console.log('Error:',err);
});