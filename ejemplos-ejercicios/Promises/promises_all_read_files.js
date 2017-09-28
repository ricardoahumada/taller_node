const fs = require('fs');

function readAllFiles () {

	var promises = [];

	for(var idx in arguments) {
		console.log('Reading:', arguments[idx]);
		promises.push(
			new Promise((resolve, reject) => {
				fs.readFile(arguments[idx], (err,data)=>{
					return err?reject(err):resolve(data.toString());
				});	
			})			
		);

	}

	Promise.all(promises)
	.then((data)=>{
		console.log('Leidos:',data);
	})
	.catch( (error)=>{
		console.log('Error leyendo:',error);
	});

}

readAllFiles('test.txt','new.txt')