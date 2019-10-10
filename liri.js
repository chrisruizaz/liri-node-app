require("dotenv").config();
const args = process.argv;
const command = args[2];

if (command === "spotify-this-song") {
  SpotSong(input);
}
