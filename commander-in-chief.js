//Dependencies and stuff we need
const request = require("request");
const moment = require("moment");
const axios = require("axios");
const fs = require("fs");
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');

//Commander constructor
const commanderInChief = function () {

    //breaker is a separater used to prettify the data printed on the log.txt
    const breaker = "\n\n============================================================\n\n";

    this.findConcert = function (search) {
        const url = `https://rest.bandsintown.com/artists/${search}/events?app_id=codingbootcamp`

        axios.get(url).then(function (response) {

            for (let i = 0; i < response.data.length; i++) {

                // Place the response.data into a variable, jsonData.
                let apiData = response.data[i];

                if (apiData.venue.region === "") {
                    locale = apiData.venue.country;
                } else {
                    locale = apiData.venue.region;
                };
                // concertData ends up being the string containing the show data we will print to the console
                let concertData = [
                    `Name of Venue: ${apiData.venue.name}`,
                    `Venue Location: ${apiData.venue.city}, ${locale}`,
                    `Date of Event: ${moment(apiData.datetime).format('MM/DD/YYYY')}`,
                    `*****************************************************\n`
                ].join("\n\n")

            
                // Append concertData and the breaker to log.txt and print concertData to the console
                fs.appendFile("log.txt", concertData, function (err) {
                    if (err) throw err;
                    else console.log(concertData);
                });

            };

        });

    };

    this.findMovie = function (search) {
        const url = `http://www.omdbapi.com/?t=${search}&y=&plot=short&apikey=trilogy`

        axios.get(url).then(function (response) {

            // Place the response.data into a variable, jsonData.
            const apiData = response.data;

            // movieData ends up being the string containing the show data we will print to the console
            const movieData = [
                `Title: ${apiData.Title}`,
                `Release Year: ${apiData.Released.slice(-4)}`,
                `IMDB Rating: ${apiData.imdbRating}`,
                `Rotten Tomatoes Rating: ${apiData.Ratings[1].Value}`,
                `Produced in: ${apiData.Country}`,
                `Language: ${apiData.Language}`,
                `Plot: ${apiData.Plot}`,
                `Actors: ${apiData.Actors}`
            ].join("\n\n");

            // Append movieData and the breaker to log.txt and print movieData to the console
            fs.appendFile("log.txt", movieData + breaker, function (err) {
                if (err) throw err;
                else console.log(movieData);

            });
        });
    };

    this.findSong = function (search) {

        const spotify = new Spotify({
            id: process.env.SPOTIFY_ID,
            secret: process.env.SPOTIFY_SECRET
        });

        spotify.search({ type: 'track', query: search, limit: 1 }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            // console.log(data);
            // console.log("Track:", data.tracks.items[0].name)

            const apiData = data.tracks.items[0];
            // songData ends up being the string containing the show data we will print to the console

            const songData = [
                `Artist: ${apiData.artists[0].name}`,
                `Song Title: ${apiData.name}`,
                `Preview Link: ${apiData.preview_url}`,
                `From the Album: ${apiData.album.name}`,

            ].join("\n\n");

            // Append songData and the breaker to log.txt and print songData to the console
            fs.appendFile("log.txt", songData + breaker, function (err) {
                if (err) throw err;
                else console.log(songData);

            });
        });
    };

    this.doTheThings = function () {

        fs.readFile("random.txt", "utf8", function (err, data) {
            if (err) {
                return console.log(err);
            }

            // Split the string down by comma separation and store the contents into the inputs array.
            var inputs = data.split(",");

            // Loop Through the newly created output array
            let command = inputs[0];
            let rawSearch = inputs[1];
            if (!rawSearch) {
                search = ""
            } else {
                search = rawSearch.split('"')
            };

            const commandment = new commanderInChief()

            switch (command) {
                case "":
                    console.log("You didn't tell me what to do, so I'm going to search for a concert for a cool band.")
                    search = "Vulfpeck";
                    commandment.findConcert(search);
                case "concert-this":
                    if (!search) {
                        search = "Vulfpeck";
                    }
                    console.log("Searching for that concert...\n");
                    commandment.findConcert(search);
                    break;
                case "spotify-this-song":
                    if (!search) {
                        search = "The Sign Ace of Base";
                    }
                    console.log("Searching for that tune...\n");
                    commandment.findSong(search);
                    break;
                case "movie-this":
                    if (!search) {
                        search = "Mr. Nobody";
                    }
                    console.log("Searching for that movie...\n");
                    commandment.findMovie(search);
                    break;
                default:
                    console.log("Please tell me what to do!\n");
                    break;
            }

        });




    }
};


module.exports = commanderInChief;