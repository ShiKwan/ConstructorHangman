var inquirer = require('inquirer')
var chalk = require('chalk')
var word = require('./word.js')
var wordInfo = require('./wordInfo.js')
var gamePlay = require('./gamePlay.js')
var gamePlaySteps = require('./gamePlaySteps.js');

var newWord = new wordInfo('')
var newGamePlay = new gamePlay(newWord)
function startGamePlay () {
  inquirer.prompt([
    {
      name: 'confirm',
      type: 'confirm',
      message: 'start the game?'
    }
  ]).then(function (answer) {
    if (answer.confirm === true) {
      newWord.word = word[0]
      removeA(word, word[0])
      newWord.makeWordArr(newWord.word)
      newWord.makePlayWordArr(newWord.word)
      promptGamePlay()
    }else {
      console.log('Good bye')
    }
  })
}

function promptGamePlay () {
  inquirer.prompt([{
    name: 'txtGuess',
    message: 'Guess a letter',
    validate: function (value) {
      if ((value.length === 1) && (value.indexOf(' ') === -1)) {
        return true
      }
      return 'Please enter only ' + chalk.bold('*ONE*') + ' valid character (a-z)'
    }
  }]).then(function (answer) {
    newGamePlay.userGuess(answer.txtGuess)
    if (newGamePlay.triesLeft > 0) {
      if (newGamePlay.wordInfo.playWordArr.indexOf('_') == -1) {
        if (word.length > 0) {
          newWord.word = word[0]
          removeA(word, word[0])
          console.log('you got it right! next word!')
          newWord.makeWordArr(newWord.word)
          newWord.makePlayWordArr(newWord.word)
          newGamePlay.triesLeft = 10
          promptGamePlay()
        }else {
          console.log("you beat the game, i'm out of words, get out there and get a life")
        }
      }else {
        promptGamePlay()
      }
    }else {
      console.log('you are out of tries, try another word!')
      if (word.length > 0) {
        newWord.word = word[0]
        removeA(word, word[0])
        newWord.makeWordArr(newWord.word)
        newWord.makePlayWordArr(newWord.word)
        newGamePlay.triesLeft = 10
        promptGamePlay()
      }else {
        console.log('no words left =/ thanks for playing!')
      }
    }
  })
}

var removeA = function (arr) {
  var what, a = arguments, L = a.length, ax
  while (L > 1 && arr.length) {
    what = a[--L]
    while ((ax = arr.indexOf(what)) !== -1) {
      arr.splice(ax, 1)
    }
  }
  return arr
}

startGamePlay()
