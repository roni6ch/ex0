var events = require('events');
var util = require('util');
util.inherits(Game,events.EventEmitter);

var  loger="";

exports.soccer = function(){
	var game = new Game();
	// create Player instance and attach callbacks to events
	game.on("gol",displayGameStatus);
	game.on("gol",winOrLoose);
	return game;
}

exports.getLoger = function(){
	return loger;
}

// Game Object Constructor
function Game() {
	this.myGols = 0;
	this.enemyGols = 0;
	events.EventEmitter.call(this);
};

// Game Object prototypes
Game.prototype.myGameGols = function() {
	this.myGols +=1;
	this.emit('gol'); 
}
Game.prototype.enemyGameGols = function() {
	this.enemyGols +=1;
	this.emit('gol'); 
}

//the callbacks functions
 function displayGameStatus()  {
 	var sum = this.myGols - this.enemyGols;
	console.log("the score now is: " + sum);
	loger += "the score now is: " + this.myGols + " - " + this.enemyGols + "<br>";
} 
 function winOrLoose() {
	if (this.myGols - this.enemyGols  < 0){
		console.log("we are loosing.....");
		loger += "we are loosing....." + "<br>";
	}
}

