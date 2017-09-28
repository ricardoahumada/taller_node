//solo si no hay Promise nativo
//var Promise = require('bluebird');
var defer = Promise.defer(),
promise = defer.promise;

promise.then(function(val){
	console.log('Valor:', val);
})
.catch(function(err){
	console.log('Error:', err);
});

setTimeout(function() {
	// defer.resolve("hey!");
	defer.reject("Boom!");
}, 2000);
