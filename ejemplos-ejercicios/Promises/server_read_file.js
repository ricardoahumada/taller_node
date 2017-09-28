const http = require('http'),
	url = require('url'),
	inspect = require('util').inspect,
	fs = require('fs');

var server = http.createServer();
var port = process.argv[2]?parseInt(process.argv[2]):3000;


server.on("connection", (socket) => {
	console.log('Receiving connection:',socket.localAddress, socket.localPort, socket.remoteAddress,"\n\n");
})

server.on('request',function (req, res) {
	var urlData = url.parse(req.url,true);
	var ins = inspect(urlData,{colors:true});
	console.log('ins:',ins);

	var remoteIP = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
	console.log("Remote IP:",remoteIP);

	var query_params = urlData.query;
	if(query_params['fn']){
		serve_file(query_params['fn'], req, res);
	}else{
		res.statusCode = 500;
		res.end("Enter a file name: ?fn=<filename>");
	}

});

server.listen(port,()=>{console.log("Listening on port:",port)})


function serve_file(bfn, req, res){
	if(bfn.indexOf("..")>=0){
		res.statusCode = 300;
		res.end("Prohibido");
	}

	fn = './public/'+bfn;

	var fileExistsPromise = new Promise((resolve, reject) => {
		fs.exists(fn, (exists)=>{
			exists? resolve(true):reject(404);
		});
	});

	var readFilePromise = new Promise((resolve, reject) => {
		fs.readFile(fn, (err,data)=>{
			if(err){
				reject(500)
			}else{
				resolve(data)
			}
		});
	});

	fileExistsPromise.then((data)=>{
		return readFilePromise;
	})
	.then((data)=>{
		res.statusCode = 200;
		res.end(data)
	})
	.catch( (error)=>{
		res.statusCode = error;
		res.end("Error!")
	});

}