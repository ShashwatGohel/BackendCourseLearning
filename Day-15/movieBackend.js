const express = require('express');
const mongoose = require("mongoose")
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;


mongoose.connect("mongodb://127.0.0.1.27017/movieDB").then(()=>{
    console.log("MongoDB Connected Successfully")
})

const movieSchema = new mongoose.Schema({
    title: String,
    hero: String,
    rating: Number
})

const Movie = mongoose.model(
    "Movie",
    movieSchema
)

app.get("./movies",(req,res)=>{
    res.send("MongoDB Connected Successfully")
})

app.post("./create-movie",async (req,res)=>{
    try{
        const newMovie = new Movie(req.body)

        await newMovie.save()

        res.status(200).send({
            success:true,
            message:"Movies Created",
            data:newMovie
        })
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Movie Not Created",
        });
    }
})

app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});