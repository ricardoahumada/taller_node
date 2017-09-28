var http = require('http')

var server = http.createServer();
var port = process.argv[2]?parseInt(process.argv[2]):3000;


server.on("connection", (socket) => {
	console.log('Receiving connection:',socket.localAddress, socket.localPort, socket.remoteAddress,"\n\n");
})

server.on('request',function (req, res) {
	console.log("Headers:",req.headers);
	console.log("Method:",req.method);
	console.log("URL:",req.url);
	console.log("Remote Address:",req.connection.remoteAddress);

	res.statusCode = 202;
	res.setHeader('token','Un_token');
	res.end('Hey !!');
});

server.listen(port,()=>{console.log("Listening on port:",port)})
