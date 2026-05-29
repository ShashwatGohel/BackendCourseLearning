const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/moviesdb')
.then(() => {
    console.log('MongoDB Connected Successfully');
})
.catch((error) => {
    console.log(error);
});
const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    releaseYear: Number,
    rating: Number
});
const Movie = mongoose.model('Movie', movieSchema);

app.get('/movies/action',async(req,res)=>{
    try{
        const movie = await movie.find({genre:"action"})
        res.send({
            success:true,
            message:"All movies with genre as Action Displayed",
            data:movie
        })
    }
    catch(error){
        res.send({
            success:false,
            message:"Movies Not found"
        })
    }
})

app.get('/products/expensive',async(req,res)=>{
    try{
        const product = await Product.find({price: { $gt: 1000 }})
        res.send({
            success:true,
            message:"product above 1k displayed",
            data:product
        })
    }
    catch(error){
        res.send({
            success:false,
            message:"Product Not found"
        })
    }
})

app.get('/students/course/:courseId',async(req,res)=>{
    try{
        const student = await Student.find({courseId:req.params.courseId}).populate("courseId")
        res.send({
            success:true,
            message:"All Students of Course Displayed",
            data:course
        })
    }
    catch(error){
        res.send({
            success:false,
            message:"Finding Failed",
        })
    }
})

app.post('/login',async(req,res)=>{
    try{
        const user = await User.findOne(email:req.body.email)
        if(user){
            if(user.password!= req.body.password){
                res.send({
                    success:false,
                    message:"Password Not Matching",
                })
            }
            res.send({
                success:true,
                message:"User Found",
                data:user
            })
        }
    }
    catch(error){
        res.send({
            success:false,
            message:"User Not Found"
        })
    }
})
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});