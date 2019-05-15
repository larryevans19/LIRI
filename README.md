# LIRI

**LIRI** stands for Language Interpretation and Recognition Interface, and is the red-headed step-brother of the Speech Interpretation and Recognition Interface iPhone users know as SIRI.  **LIRI** is a command line node app that takes in two parameters from a user as CLI arguments, a _COMMAND_ term and _SEARCH_ term, and then provides the user with useful output data by printing it to the terminal console.

## COMMANDS
**LIRI** features four (4) _COMMAND_ options, with each subsequent _SEARCH_ term representing a different item to search: 
* _concert-this_ performs a query of the artist provided as the _SEARCH_ term in the Bands In Town API and returns a list of upcoming events showing the venue name, location and the date of the event.
![](concert-this.gif)

* _spotify-this-song_ performs a query of the song provided as the _SEARCH_ term in the Spotify API and returns useful information about the song, including the artist, title, a preview URL to listen to a :30 snippet of the song, and name of the album on which the song was released.
![](spotify-this-song.gif)

* _movie-this_ performs a query of the movie provided as the _SEARCH_ term in the OMBD API and returns useful information about the movie, including the title, release year, the countries in which the movie was produced, the IMBD Rating, the Rotten Tomatoes Rating, the language of the moive, a short summary of the plot, and the actors featured in the movie.
![](movie-this.gif)

* _do-what-it-says_ reads the content of the _random.txt_ file located in the repo and parses the text string to extract the _COMMAND_ and _SEARCH_ terms and then performs the appropriate **LIRI** functions.
![](do-what-it-says.gif)

The **LIRI** _COMMANDS_ were created in part using a constructor located on the _commander-in-chief.js_ file required by the main _liri.js_ file.  The developer attempted to incorporate as much ES6 Javascript as possible as a self-challenge.



### BONUS

The _log.txt_ file located in the repo contains the output generated by the executions in the gifs above using the fs.appendFile() method offered by node, and serves as a demonstration of the successful completion of the bonus portion of the **LIRI** development project. 
