var inquirer = require('inquirer')
var word = require('./word.js');


console.log(word[0]);

function wordInfo(word){
	this.word = word;
	this.wordArr = [];
	this.playWordArr = [];
	this.length = this.word.length;
	this.makeWordArr = function(word){
		for(var i =0; i<word.length; i++){
			this.wordArr.push(word[i]);
		}
		console.log(this.wordArr);
	}
	this.makePlayWordArr = function(word) {
		for(var i=0; i< word.length; i++){
			if(word[i] === " "){
				this.playWordArr.push(" ");
			}else{
				this.playWordArr.push("_");
			}
		}
		console.log(this.playWordArr);
	}
}

function gamePlay(wordInfo){
	this.wordInfo = wordInfo;
	this.userGuess = function(letter){
		for(var i=0; i< this.wordInfo.wordArr.length; i++){
			console.log(this.wordInfo.wordArr);
			if(this.wordInfo.wordArr[i] == letter){
				console.log(this.wordInfo.wordArr[i] + "/ " + letter);
				console.log("found a matched letter! proceed with replacing the array slot");
				this.wordInfo.playWordArr[i] = letter;
			}
		}
		console.log(this.wordInfo.playWordArr);
	}	
}


var newWord = new wordInfo("test testing");
var newGamePlay = new gamePlay(newWord);
function startGamePlay(){
	inquirer.prompt([
		{
			name: "confirm",
			type: "confirm",
			message: "start the game?"
		}
	]).then(function (answer){
		if(answer.confirm === true){
			
			newWord.makeWordArr(newWord.word);
			newWord.makePlayWordArr(newWord.word);
			var onceGuessCorrectly = false;

			promptGamePlay();
		}else{
			console.log("Good bye");
		}
	})
}

function promptGamePlay(){
	inquirer.prompt([{
		name: "txtGuess",
		message: "Guess a letter"
	}]).then(function (answer) {
		console.log("user guessed .. " + answer.txtGuess);
		newGamePlay.userGuess(answer.txtGuess);
		if (newGamePlay.wordInfo.playWordArr.indexOf("_") == -1 ){
			console.log("You guessed all it right!");
			newWord = new wordInfo("what mate");
			newGamePlay = new gamePlay(newWord);
			startGamePlay();
		}
		else{
			promptGamePlay();
		}
	})
}

startGamePlay();
//promptGamePlay();


