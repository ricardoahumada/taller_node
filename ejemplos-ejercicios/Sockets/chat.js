var express = require("express"),
app = express(),
Promise = require('bluebird')
server = require("http").createServer(app),
io = require("socket.io")(server);

app.use(express.static(__dirname + "/public"));

// Promise.promisify(io);

io.of('/animales').on("connection", processMessages);
io.of('/comida').on("connection", processMessages);

function processMessages (socket) {
	socket.on('msg', function(data) {
		console.log('msg:',data);
		socket.broadcast.emit('msg',data)
	});
}

server.listen(3000);