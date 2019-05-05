//Read and set any environment variables with the dotenv package
require("dotenv").config();

const commanderInChief = require("./commander-in-chief");

// Initialize commanderInChief
const commander = new commanderInChief();

// Break down the arguments array from the CLI
let [, , command = "concert-this", ...search] = process.argv;

// Default the search item if there is no input
if (!search[0]) {
  search = "Star Trek: Deep Space Nine";
} else {
  search = search.join(" ");
}
console.log(search);
// Do what was asked...
switch (command) {
  case "concert-this":
    console.log("Searching for that concert...\n");
    commander.findConcert(search);
    break;
  case "spotify-this-song":
    console.log("Searching for that tune...\n");
    commander.findSong(search);
    break;
  case "movie-this":
    console.log("Searching for that movie...\n");
    commander.findMovie(search);
    break;
  case "do-what-it-says":
    console.log("Searching for what you told me to do...\n");
    commander.doTheThings(search);
    break;
  default:
    console.log("Please tell me what to do!\n");
    break;
}
