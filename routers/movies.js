const express = require("express");
require ("../index")
const router = express();
const Movie = require("../model/movieSchema");

//using post we update the movie data in database through postman
router.post("/movies", async (req, res) => {
  try {
    const addingMovieRecords=new Movie(req.body)
    console.log(req.body);
    const insertMovie=await addingMovieRecords.save();
    res.send(insertMovie);
    res.status(201).json({ message: "Movie Update Success" });
  } catch (error) {
    console.log(error);
  }
});

//to read data from the database we use get method
router.get("/movies", async (req, res) => {
  try {
    const getMovies =await Movie.find()
    res.status(201).json(getMovies);
  } catch (error) {
    console.log(error);
  }
});

//to read individual data from the database we use get and id of movie method
router.get("/movies/id", async (req, res) => {
    try {
      const _id = req.params.id;
      const getMovie =await Movie.findById({_id})
      res.status(201).json(getMovie);
    } catch (error) {
      console.log(error);
    }
  });

  //to update field in the document we use patch method
  router.patch("/movies/id", async (req, res) => {
    try {
      const _id = req.params.id;
      const getMovie =await Movie.findByIdAndUpdate(_id,req.body)
      res.status(201).json(getMovie);
    } catch (error) {
      console.log(error);
    }
  });

  //for deleting the data from database we use delete method
  router.delete("/movies/id", async (req, res) => {
    try {
      const _id = req.params.id;
      const getMovie =await Movie.findByIdAndDelete(req.params.id)
      res.status(201).json(getMovie);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;