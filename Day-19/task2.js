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

const authorSchema = new mongoose.Schema({
    name:String,
    age:Number
})
const Author = mongoose.model(
    "Author",
    authorSchema
)
const bookSchema = new mongoose.Schema({
    title:String,
    price:Number,
    author:{
        type:mongoose.Schema.Types.ObjectId , ref:"Author"
    }
})
const Book = mongoose.model(
    "Book",
    bookSchema
)

app.post('/authors',async(req,res)=>{
    try{
        const newAuthor = await Author.create(req.body)
        res.send({
            success:true,
            message:"Author Created",
            data:newAuthor
        })
    }
    catch(error){
        res.send({
            success:false,
            message:"Author Creation Failed"
        })
    }
})

app.post('/book',async(req,res)=>{
    try{
        const newBook = await Book.create(req.body)
        res.send({
            success:true,
            message:"Book Created and Saved",
            data:newBook
        }) 
    }
    catch(error){
        res.send({
            success:false,
            message:"Book Creation Failed" 
        })
    }
})
app.get('/books/:id', async(req,res)=>{
    try{
        const book = await Book.findById(req.params.id).populate("authors")
        if(book){
            res.send({
                success:true,
                message:"Book Found",
                data: book
            })
        }
        else{
            res.send({
                success:false,
                message:"Book Not Found"
            })
        }
    }
    catch(error){
        res.send({
            success:false,
            message:"Failed to Find the Book"
        })
    }
})
app.listen(3000, () => {
    console.log(`Server running on port 3000 `);
});