/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    console.log(words)
    this.makeChains(words);
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains(input) {
    let map = new Map();
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
      if (map.has(word)) {
        map.get(word).push(followingWord);
      } else {
        map.set(word, [followingWord]);
      }
    }
    console.log(map)
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

let m = new MarkovMachine("the cat in the hat")