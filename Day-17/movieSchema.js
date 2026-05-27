const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/moviesDB')
.then(() => {
    console.log('MongoDB Connected Successfully');
})
.catch((error) => {
    console.log(error);
});

app.get('/', (req, res) => {
    res.send('Server Running Successfully');
});

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    genre:{
        type:String,
        default:"Aaction"
    },
    ratings:{
        type:Number,
        min:1,
        max:10
    },
    hero:{
        type:String,
        required:true
    }
})
const movie = mongoose.model(
    "Movie",
    movieSchema
)
app.get('/getMovies',async(req,res)=>{
    try{
        const newMovie = await movie.find()
        res.status(200).send({
            success:true,
            message:"Movies Found are Displayed",
            data:newMovie   
        })
    }
    catch(error){
        res.status(500).send({
            success:false,
            message:"Movie Not Found"
        })
    }
})

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});