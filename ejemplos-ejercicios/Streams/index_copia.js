const fs = require('fs');
const { COPYFILE_EXCL } = fs.constants;

// console.log("args:",process.argv);

if(!process.argv[2] || !process.argv[3]){
	console.log('Indica origen y destino')
	return ;
}else{
	var origen=process.argv[2];
	var destino=process.argv[3];
}

var readStream = fs.createReadStream(origen, {
	flags: "r",
	encoding: "ascii",
	autoClose: true
});

var writeStream = null;

var dest_exists = fs.exists(destino, (exists) => {
  console.log(destino+ ':' + (exists ? 'Ya existe!\n' : 'No existe!\n'));
  writeStream = fs.createWriteStream(destino, {
		flags: exists?"a":"wx",
		encoding: "ascii",
		autoClose: true
	});

});

readStream.on("data", function(chunk) {
	console.log("He leído:", chunk, chunk.length);
	writeStream.write(chunk + " x ");
	console.log("He escrito:", chunk.length);
});

readStream.on("end", function() {
	console.log("ya está");
	writeStream.close();
});

