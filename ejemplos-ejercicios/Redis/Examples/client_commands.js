var redis = require("redis"),
Promise = require("bluebird"),
client = redis.createClient();

Promise.promisifyAll(client);

/*
// BASIC
client.existsAsync("MiClave")
.then(function(exists) {
	console.log( exists? "Existe!" : "No existe..." );
	return client.setAsync("MiClave", "MiValor");
})
.then(function() {
	return client.renameAsync("MiClave", "MyKey");
})
.then(function() {
	return client.typeAsync("MyKey");
})
.then(function(type) {
	console.log("MyKey es de tipo", type);
	return client.getAsync("MyKey");
})
.then((val)=>{
	console.log("Valor:", val);
});


// OTROS
client.setAsync("miClave", 1)
.then(function() {
	return client.incrbyAsync("miClave", 10);
}).then(function() {
	return client.decrAsync("miClave");
}).then(function() {
	return client.getsetAsync("miClave", "fin");
}).then(function(valor) {
	console.log("VALOR: ", valor);
	return client.strlenAsync("miClave")
}).then(function(len) {
	console.log("Len: ", len);
});*/

// MULTIPLE
/*client.msetAsync("miClave_a", 1, "otraClave",2)
.then(function() {
	return client.mgetAsync("miClave_a","otraClave");
})
.then(function(values) {
	console.log(values[0], ",", values[1]);
});

// LISTAS
client.delAsync("miClave")
.then(client.rpushAsync("miClave", 1, 2, 3, 4))
.then(client.lrangeAsync("miClave", 1, 3))
.then(function(values) {
	console.log("lrange:",values);
	return client.ltrimAsync("miClave", 0, 1);
})
.then(function(range){
	console.log("ltrim:",range);
	return client.llenAsync("miClave");
})
.then(function(len) {
	console.log(len);
});

// HASH
client.delAsync("miClave").then(function() {
	return client.hmsetAsync("miClave", "a", 1, "b", 2, "c", 3);
})
.then(function() {
	return client.hincrbyAsync("miClave", "c", 100);
})
.then(function() {
	return client.hgetallAsync("miClave");
})
.then(function(hash) {
	console.log(hash);
// { a: '1', b: '2', c: '103' }
});
*/

// CONJUNTOS
client.saddAsync("miConjunto", 1, 1, 2, 3, 5, 8, 13)
.then(client.saddAsync("miConjunto2", 1, 3, 5, 7, 9, 11,
	13))
.then(
	function (argument) {
		return client.sinterAsync("miConjunto", "miConjunto2");
	}
)
.then(function(values) {
	console.log("Intersección:", values);
	return client.sdiffAsync("miConjunto", "miConjunto2");
})
.then(function(values) {
	console.log("Diferencia:", values);
});