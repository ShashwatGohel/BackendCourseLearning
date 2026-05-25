const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Book API');
});
app.get("/book",(req,res)=>{
    res.json([
  {
    "id": 1,
    "title": "Atomic Habits"
  },
  {
    "id": 2,
    "title": "Deep Work"
  }
])
});
app.post("/book",(req,res)=>{
    console.log(req.body);
    res.json({
        message:"Book Added Successfully",
        book: req.body
    })
    console.log(req.body.title);
});
app.get("/book/:id",(req,res)=>{
    const bookId = req.params.id;
    res.end(`Fetching Book : ${bookId}`);
});
app.get("/search",(req,res)=>{
    const genre = req.query.genre;
    res.send(`Searching  ${genre} book`);
});

app.use((req,res)=>{
    res.status(404).send("Page Not Found")
});
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});