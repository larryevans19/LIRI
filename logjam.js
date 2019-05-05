//BONUS 
//*In addition to logging the data to your terminal/bash window,
//output the data to a .txt file called log.txt.
//*Make sure you append each command you run to the log.txt file.
//*Do not overwrite your file each time you run a command.

//**Trying to do this using ES6** #FLEXIN

const fs = require("fs");

class logjam {
  constructor() {
    this.divider = "\n===================================\n";
  }

  log(logItem) {
    return new Promise((resolve, reject) => {
      fs.appendFile("log.txt", logItem + this.divider, err => {
        if (err) {
          reject(err);
        }
        resolve(logItem);
      });
    });
  }
}

module.exports = logjam;
