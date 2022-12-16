const mongoose = require("mongoose");

//this is the schema we use in database for storing data
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  summary: {
    type: String,
  }
});


const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;