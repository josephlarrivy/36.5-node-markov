/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

// ######################

function generate(input) {
    let callMachine = new markov.MarkovMachine(input);
    console.log(callMachine.makeText());
}


function makeText(path) {
  fs.readFile(path, "utf8", function cb(err, data) {
    if (err) {
      console.error(`Cannot read file: ${path}: ${err}`);
      process.exit(1);
    } else {
      generate(data);
    }
  });
}

async function makeURLText(url) {
  let response;
  try {
    response = await axios.get(url);
  } catch (e) {
    console.error(`Cannot read URL: ${url}: ${err}`);
    process.exit(1);
  }
  generate(response.data)
}

let [method, path] = process.argv.slice(2);
if (method === "file") {
  makeText(path);
}
else if (method === "url") {
    makeURLText(path);
}
console.error(`cannot use ${method} on ${file}`);
process.exit(1);


// generate("this is a sentence that I am writing to test if this is working right or not")