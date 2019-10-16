// require("dotenv").config();
const args = process.argv;
const command = args[2];
var search = process.argv.slice(3).join(" ");
liriCommand(search);
function liriCommand(search) {
  if (command === "spotify-this-song") {
    spotifyThis(search);
  };
 else if (command === "concert-this"){};
}

function spotifyThis(search) {
  console.log(search);
}

//need to create a function that uses the input to find
//     * Artist(s)

// * The song's name

// * A preview link of the song from Spotify

// * The album that the song is from

// and a default song when an invalid name is given

//I also need to add the other API's and their functions to this project
