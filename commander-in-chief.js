//Dependencies and stuff we need
const request = require("request");
const moment = require("moment");
const axios = require("axios");
const fs = require("fs");
const Logjam = require("./logjam");
const keys = require("./keys.js");
const spotify = require('node-spotify-api');

//Commander constructor
const commanderInChief = function () {

    //breaker is a separater used to prettify the data printed on the log.txt
    const breaker = "\n\n============================================================\n\n";

    this.findConcert = function (search) {
        const url = `https://rest.bandsintown.com/artists/${search}/events?app_id=codingbootcamp`

        axios.get(url).then(function (response) {

            console.log("Length:", response.data.length)
            console.log(response.data[1].venue.name);

            for (let i = 0; i < response.data.length; i++) {
           
                // concertData ends up being the string containing the show data we will print to the console
                let concertData = [
                    `\nName of Venue: ${response.data[0].venue.name}`,
                    `Venue Location: ${response.data[0].venue.city}, ${response.data[0].venue.region}`,
                    `Date of Event: ${moment(response.data[0].datetime).format('MM/DD/YYYY')}`,
                    `------------------------------------------------------------`,
                ].join("\n\n")
                    ;

                // Append concertData and the breaker to log.txt and print concertData to the console
                fs.appendFile("log.txt", concertData + breaker, function (err) {
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
            var jsonData = response.data;

            // movieData ends up being the string containing the show data we will print to the console
            var movieData = [
                `Title: ${jsonData.Title}`,
                `Release Year: ${jsonData.Released.slice(-4)}`,
                `IMDB Rating: ${jsonData.imdbRating}`,
                `Rotten Tomatoes Rating: ${jsonData.Ratings[1].Value}`,
                `Produced in: ${jsonData.Country}`,
                `Language: ${jsonData.Language}`,
                `Plot: ${jsonData.Plot}`,
                `Actors: ${jsonData.Actors}`
            ].join("\n\n");

            // Append movieData and the breaker to log.txt and print movieData to the console
            fs.appendFile("log.txt", movieData + breaker, function (err) {
                if (err) throw err;
                else console.log(movieData);

            });
        });
    };

    this.findSong = function (search) {
        const url = `http://www.omdbapi.com/?t=${search}&y=&plot=short&apikey=trilogy`

        axios.get(url).then(function (response) {

            // Place the response.data into a variable, jsonData.
            var jsonData = response.data;

            // movieData ends up being the string containing the show data we will print to the console
            var movieData = [
                `Title: ${jsonData.Title}`,
                `Release Year: ${jsonData.Released.slice(-4)}`,
                `IMDB Rating: ${jsonData.imdbRating}`,
                `Rotten Tomatoes Rating: ${jsonData.Ratings[1].Value}`,
                `Produced in: ${jsonData.Country}`,
                `Language: ${jsonData.Language}`,
                `Plot: ${jsonData.Plot}`,
                `Actors: ${jsonData.Actors}`
            ].join("\n\n");

            // Append movieData and the breaker to log.txt and print movieData to the console
            fs.appendFile("log.txt", movieData + breaker, function (err) {
                if (err) throw err;
                else console.log(movieData);

            });
        });
    };
};



module.exports = commanderInChief;