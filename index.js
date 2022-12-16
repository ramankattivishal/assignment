const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//using mongoose we connect the database
const cors = require("cors");
app.use(cors());
mongoose.connect("mongodb://localhost:27017/moviescollection",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("connected to DB")
})

const movies = require("./routers/movies");
app.use("/", movies);

app.listen(3000,()=>{
    console.log("started")
})