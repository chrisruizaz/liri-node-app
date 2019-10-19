// require("dotenv").config();
const args = process.argv;
const command = args[2];
var search = process.argv.slice(3).join(" ");
const fs = require("fs");
liriCommand(search);
function liriCommand(search) {
  if (command === "spotify-this-song") {
    spotifyThis(search);
  } else if (command === "concert-this") {
    bandsinTown(search);
  } else if (command === "movie-this") {
    movieIMDB(search);
  } else if (command === "do-what-it-says") {
    fs.readFile("random.txt", "utf-8", (err, data) => {
      console.log(data);
    });
  }
}

function spotifyThis(search) {
  var keys = require("./keys.js");
  var spotify = new Spotify(keys.spotify);
  console.log(spotify);
}

function bandsinTown(search) {
  var axios = require("axios");

  var queryUrl =
    "https://rest.bandsintown.com/artists/" +
    search +
    "/events?app_id=codingbootcamp";
  axios.get(queryUrl).then(function(response) {
    console.log(response);
  });
}

function movieIMDB(search) {
  var axios = require("axios");

  var queryUrl =
    "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";

  axios
    .get(queryUrl)
    .then(function(response) {
      // * Title of the movie.
      console.log("Title: " + response.data.Title);
      // * Year the movie came out.
      console.log("Release Year: " + response.data.Year);
      // * IMDB Rating of the movie.
      console.log("IMDB Rating: " + response.data.imdbRating);
      // * Rotten Tomatoes Rating of the movie.
      console.log("Metascore: " + response.data.Metascore);
      // * Country where the movie was produced.
      console.log("Country: " + response.data.Country);
      // * Language of the movie.
      console.log("Language: " + response.data.Language);
      // * Plot of the movie.
      console.log("Plot: " + response.data.Plot);
      // * Actors in the movie.
      console.log("Actors: " + response.data.Actors);
    })
    .catch(function(error) {
      if (error.response) {
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

//need to create a function that uses the input to find
//     * Artist(s)

// * The song's name

// * A preview link of the song from Spotify

// * The album that the song is from

// and a default song when an invalid name is given

//I also need to add the other API's and their functions to this project
