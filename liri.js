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
    fs.readFile(
      "random.txt",
      "utf-8",
      //"utf-8" will make actual things populate otherwise it will be all numbers!
      (err, data) => {
        console.log(data);
      }
    );
  }
}

function spotifyThis(search) {
  var keys = require("./keys.js");
  var spotify = new Spotify(keys.spotify);
  console.log(spotify);
}

function bandsinTown(search) {
  console.log("bands in town");
}

function movieIMDB(search) {
  console.log("movie search");
}

//need to create a function that uses the input to find
//     * Artist(s)

// * The song's name

// * A preview link of the song from Spotify

// * The album that the song is from

// and a default song when an invalid name is given

//I also need to add the other API's and their functions to this project
