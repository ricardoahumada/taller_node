
console.log('Defining promise...');
var miPromesa = new Promise((resolve, reject) => {
	console.log('Going to resolve...');
	// resolve(5);
	reject(new Error("Boom!"));
});

// var miPromesa = Promise.resolve(5);
// var miPromesa = Promise.reject(new Error('BOOM!'));

console.log('Programming promise...');
miPromesa
.then(
	(doneval)=>{
		console.log('first then:',doneval);
		return doneval;
	}
	, (failval)=>{
		console.log('Ooops there was an error:',failval);
		throw new Error("Oh, oh...");
	})
.then((doneval)=>{
	console.log('Result is:',doneval);
})
.catch((errorval)=>{
		console.log('Catch position:',errorval);
});