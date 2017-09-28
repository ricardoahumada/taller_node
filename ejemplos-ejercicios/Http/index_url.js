var http = require('http'),
	url = require('url'),
	inspect = require('util').inspect;

var server = http.createServer();
var port = process.argv[2]?parseInt(process.argv[2]):3000;


server.on("connection", (socket) => {
	console.log('Receiving connection:',socket.localAddress, socket.localPort, socket.remoteAddress,"\n\n");
})

server.on('request',function (req, res) {
	var urlData = url.parse(req.url,true);
	console.log('urlData:',urlData);
	var ins = inspect(urlData,{colors:true});
	console.log('ins:',ins);

	res.statusCode = 202;
	res.setHeader('token','Un_token');
	res.end("Hey!!");
});

server.listen(port,()=>{console.log("Listening on port:",port)})
