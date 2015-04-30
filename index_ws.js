
/* web server*/
var gols = require('./gols')
var http = require('http');


var game = gols.soccer();

// run some methods
game.myGameGols();
game.enemyGameGols();
game.myGameGols();
game.myGameGols();

var messege = gols.getLoger();
http.createServer(function (req, res){
	res.setHeader ('Content-Type', 'text/html');
	res.writeHead(200); //status code in header
	res.write(messege); // response body
	res.end("success"); // close connection
}).listen(8080) // listen for connection on this port

console.log('listening on port 8080');