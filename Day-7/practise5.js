const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
let movies = [
   {
      id: 1,
      title: "Avengers"
   },
   {
      id: 2,
      title: "Batman"
   }
];
app.get('/', (req, res) => {
  res.send('Server Running Successfully 🚀');
});
app.put('/movies/:id',(req,res)=>{
    const movie = movies.find(movie=>movie.id == req.params.id)
    if(movie){
        movie.title = req.body.title
        res.send({
            message:"Movie Title",
            movies
        })
    }
});
app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});