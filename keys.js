console.log("this is loaded");

module.exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
