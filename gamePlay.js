var inquirer = require('inquirer')
var chalk = require('chalk')

var gamePlay = function (wordInfo) {
  this.wordInfo = wordInfo
  this.win = 0
  this.loss = 0
  this.triesLeft = 10
  this.userGuess = function (letter) {
    if (this.triesLeft > 0) {
      if (this.wordInfo.wordArr.indexOf(letter) >= 0) {
        console.log(chalk.bgGreen('Correct!'))
        for (var i = 0; i < this.wordInfo.wordArr.length; i++) {
          if (this.wordInfo.wordArr[i] == letter) {
            this.wordInfo.playWordArr[i] = letter
          }
        }
        this.wordInfo.displayWord(this.wordInfo.playWordArr)
      // console.log(this.wordInfo.playWordArr)
      }else {
        console.log(chalk.bgRed('Incorrect!'))
        this.triesLeft--
        console.log(this.triesLeft + ' guesses remaining!!')
        this.wordInfo.displayWord(this.wordInfo.playWordArr)
      }
    }
  }
}

module.exports = gamePlay
