var p1 = new Promise(function(resolve){
	resolve('Promises');
});
var p2 = new Promise(function(resolve){
	setTimeout(function(){
		resolve('are cool');
	}, 500);
});

Promise.all([p1, p2]).then(function(values){
	console.log('Todas resueltas!');
console.log(values); //['Promises', 'are cool']
});