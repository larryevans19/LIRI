//Read and set any environment variables with the dotenv package
require("dotenv").config();

const commanderInChief = require("./commander-in-chief");

// Initialize commanderInChief
const commander = new commanderInChief();

// Break down the arguments array from the CLI.  Trying to use ES6 as much as I can to push myself
// and flex!  

let [, , command = "spotify-this-song", ...searchArray] = process.argv;

let search = searchArray.join(" ");
// Default the search item if there is no input
// if (!search[0]) {
//   search = "Star Trek: Deep Space Nine";
// } else {
//   search = search.join(" ");
// }
// console.log(search);

// Perform the command and search
switch (command) {
  case "concert-this":
    if (!searchArray[0]) {
      search = "Vulfpeck";
    };
    console.log("Searching for that concert...\n");
    commander.findConcert(search);
    break;
  case "spotify-this-song":
    if (!searchArray[0]) {
      search = "The Sign Ace of Base";
    };
    console.log("Searching for that tune...\n");
    commander.findSong(search);
    break;
  case "movie-this":
    if (!searchArray[0]) {
      search = "Mr. Nobody";
    };
    console.log("Searching for that movie...\n");
    commander.findMovie(search);
    break;
  case "do-what-it-says":
    commander.doTheThings();
    break;
  default:
    console.log("Please tell me what to do: concert-this, spotify-this-song, movie-this, or do-what-it-says!\n");
    break;
}
