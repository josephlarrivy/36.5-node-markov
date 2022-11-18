/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov");

// ######################

function generate(input) {
    let callMachine = new markov.MarkovMachine(input);
    console.log(callMachine.makeText(input));
}


generate("this is a sentence that I am writing to test if this is working right or not")