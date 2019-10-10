require("dotenv").config();
const args = process.argv;
const command = args[2];

if (command === "spotify-this-song") {
  SpotSong(input);
}
//need to create a function that uses the input to find
//     * Artist(s)

// * The song's name

// * A preview link of the song from Spotify

// * The album that the song is from

// and a default song when an invalid name is given

//I also need to add the other API's and their functions to this project
