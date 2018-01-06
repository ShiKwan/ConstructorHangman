var inquirer = require('inquirer')

function gamePlay () {
  this.word = ''
  this.life = 5
  this.chance = 10
  this.newWord = function (word) {
    var wordToGuess = ''
    for (var i = 0; i < word.length; i++) {
      if (word[i] != ' ') {
        wordToGuess += '_'
      } else {
        wordToGuess += ' '
      }
    }
    console.log('in new word function')
    console.log(wordToGuess)
    return wordToGuess
  }
  this.guessed = function (guessed, toGuess) {
    console.log('guessing.. ' + guessed)
    var pos = toGuess.indexOf(guessed)

    while(pos !== -1){
      this.word[pos] = guessed
      pos = toGuess.indexOf(guessed, pos + 1)
      console.log("here");
      console.log(this.word[pos])
    }

    if (toGuess.indexOf(guessed) >= 0) {
      console.log('correct! ')


      for (var i = 0; i < this.word.length; i++) {
        if (toGuess[i] === guessed) {
          console.log(toGuess[i] + ' matched with guessed ' + guessed)
          console.log(this.word[i])
          this.word[i] = guessed
          // this.currentPlay[i] = guessed;   
          console.log(this.word[i])
        // this.currentPlay[i] = guessed
        }
      }
    }else {
      console.log('incorrect!')
      this.chance--
    }
    console.log(this.currentPlay)
  }
}
var movieToGuess = 'lord of the ring'
var newPlay = new gamePlay()
newPlay.word = newPlay.newWord(movieToGuess)
console.log(newPlay.word)
newPlay.guessed('d', movieToGuess)
