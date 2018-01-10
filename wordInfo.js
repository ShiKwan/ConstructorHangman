var wordInfo = function (word) {
  this.word = word
  this.wordArr = []
  this.playWordArr = []
  this.length = this.word.length
  this.displayWord = function (word) {
    var toDisplay = ''
    for (var i = 0; i < word.length; i++) {
      toDisplay = toDisplay + word[i] + ' '
    }

    console.log('\n' + toDisplay + '\n')
  }
  this.makeWordArr = function (word) {
    this.wordArr = []
    for (var i = 0; i < word.length; i++) {
      this.wordArr.push(word[i])
    }
  // console.log(this.wordArr)
  // this.displayWord(this.wordArr)
  }
  this.makePlayWordArr = function (word) {
    this.playWordArr = []
    for (var i = 0; i < word.length; i++) {
      if (word[i] === ' ') {
        this.playWordArr.push(' ')
      } else {
        this.playWordArr.push('_')
      }
    }
    // console.log(this.playWordArr)
    this.displayWord(this.playWordArr)
  }
}


module.exports = wordInfo;
