var wordLibrary = [
  'game of thrones',
  'the matrix',
  'slumdog billionaire',
  'shawshank redemption',
  'the dark knight',
  'the walking dead',
  'dexter',
  'black mirror',
  'jumanji',
  'the godfather',
  'pulp fiction',
  'fight club',
  'the lord of the rings',
  'spirited away',
  'the lion king',
  'alien',
  'inglourious basterds',
  'the commuter',
  'the predator',
  'harry potter',
  'logan',
  'fantastic beasts',
  'wonder woman',
  'pirates of the carribean',
  'king arthur',
  'guardians of the galaxy',
  'black panther',
  'kingsman',
  'get out',
  'inception'
]

// Fisher-Yates shuffle algorithm
function shuffle (array) {
  var currentIndex = array.length, temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

wordLibrary = shuffle(wordLibrary);

module.exports = wordLibrary
