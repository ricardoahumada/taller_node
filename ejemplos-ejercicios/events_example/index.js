var EventEmitter = require("events").EventEmitter;
var lib = require("./libreria");
console.log(lib.propiedad);

var pub = new EventEmitter();

pub.on("ev", function(m) {
	console.log("[ev]", m);
});

pub.once("ev", function(m) {
	console.log("(ha sido la primera vez)");
});

pub.emit("ev", "Soy un Emisor de Eventos");
pub.emit("ev", "Me vas a ver muy a menudo...");