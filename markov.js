/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  
  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    // console.log(words)
    this.makeChains(words);
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */


  makeChains(input) {
    let collection = new Map();
    for (let i=0; i<input.length; i++) {
      // console.log(input[i]);
      let word = input[i];
      let followingWord;
      if (input[i+1]) {
        followingWord = input[i + 1];
      } else {
        followingWord = null;
      }
      // console.log(word, followingWord)
      if (collection.has(word)) {
        collection.get(word).push(followingWord);
      } else {
        collection.set(word, [followingWord]);
      }
    }
    console.log(collection)
    this.collection = collection
  }

  static choice(array) {
    return array[Math.floor(Math.random()*array.length)]
  }

  makeText(numWords = 100) {
    let keys = Array.from(collection.keys());
    let key = MarkovMachine.choice(keys);
      // return keys[Math.floor(Math.random() * keys.length)];
    let out = [];
    // firstKey = getRandomKey(collection);
    // return firstKey;
    while(out.length <= numWords && key !== null) {
      out.push(key)
      key = MarkovMachine.choice(this.chains.get(key));
    }
    return out.join(' ');
  }
}

module.exports = {MarkovMachine};