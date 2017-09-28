const PORT = 3000;
const HOST = 'localhost';

var express = require('express');

var app = module.exports = express();

app.use('/',express.static(__dirname + '/public'));

const redis = require('redis');
const client = redis.createClient();

const io = require('socket.io');

if (!module.parent) {
    var server = app.listen(PORT, function () {
        var host = server.address().address
        var port = server.address().port

        console.log('Express server app listening at http://%s:%s', host, port)
    })

    const socket  = io.listen(server);

    socket.on('connection', function(client) {
        const subscribe = redis.createClient();
        subscribe.subscribe('pubsub');
        
        subscribe.on("message", function(channel, message) {
            client.send(message);
        });

        client.on('message', function(msg) {
        });

        client.on('disconnect', function() {
            subscribe.quit();
        });
    });
}
