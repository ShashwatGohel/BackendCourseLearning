const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/practiseDB')
.then(() => {
    console.log('MongoDB Connected Successfully');
})
.catch((error) => {
    console.log(error);
});

app.get('/', (req, res) => {
    res.send('Server Running Successfully');
});
const movieShcema = new mongoose.Schema({
    id:Number,
    name:{
        type:String,
        required:true
    },
    ratings:{
        type:Number,
        min:1,
        max:10
    }
})
const movie = mongoose.model(
    "Movie",
    movieShcema
)
app.get('/getOneMovie',async(req,res)=>{
    try{
        const newMovie = await Movie.findOne({
            name:"Avenger"
        })
        if(MnewMovie){
            res.send({
                success:true,
                message:"Movie Found ",
                data:newMovie
            })
        }
        else{
            res.send({
                success:false,
                message:"Movie Not Found"
            })
        }
    }
    catch(error){
        res.send({
            success:false,
            message: "No Such Movie Found"
        });
    }
})
app.put('/getOneandUpdate/:id', async(req,res)=>{
    try{
        const movie = await Movie.findOneAndUpdate(req.params.id,{name:req.body.name},{new:true})
            if(movie){
                res.send({
                    success:true,
                    message: "Movie Found and Updated",
                    data:movie
                })
            }
            else{
                res.send({
                    success:false,
                    message:"No such MOvie Found"
                })
            }
    }
    catch(error){
        res.send({
            success:false,
            message:"Failed to Update the Movie"
        })
    }
})
app.delete('/movies/:id', async(req,res)=>{
    try{
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if(movie){
            res.send({
                success:true,
                message:"Movie Deleted Successfully",
                data:movie
            });
        }
        else{
            res.send({
                success:false,
                message:"Movie Not Found"
            });
        }
    }
    catch(error){
        res.send({
            success:false,
            message:"Failed To Delete Movie"
        });
    }
});
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});