console.log('Defining promise...');

var promise1 = Promise.resolve(42);
var promise2 = new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve(12);
	}, 2000);
});

promise1.then(function(val) {
	console.log("promise1:", val);
	return promise2;
})
.then(function(val) {
	console.log("promise2:", val);
});