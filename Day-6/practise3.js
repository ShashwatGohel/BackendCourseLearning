const express = require('express');
const app = express();

app.use(express.json());
// Middleware
app.use((req,res,next)=>{
    console.log("URL: ", req.url)
    console.log("Method: ", req.method)
    next()
});
const notes = [
   {
      id: 1,
      title: "Learn Express"
   },
   {
    id: 2,
    title: "Learn DevOps"
   }
];
app.get('/', (req, res) => {
  res.send('Server Running Successfully 🚀');
});

// Get All the Notes 
app.get('/notes',(req,res)=>{
    res.send({
        message: "Displaying all the Notes",
        notes : notes
    })
});

// Creating the Notes 
app.post('/notes',(req,res)=>{
    const newNotes = req.body;
    notes.push(newNotes);
    res.send({
        message: "Note Added",
        notes:notes
    })
});
// Getting a Single Note 
app.get('/notes/:id',(req,res)=>{
    const findNote = notes.find(notes=> notes.id == req.params.id)
    res.json(findNote)
});

// Deleting the Note 
app.delete('/notes/:id',(req,res)=>{
    const deletedNotes = notes.filter(notes=> notes.id != req.params.id)
    res.send(deletedNotes)
});

// Updating the note 
app.put('/notes/:id',(req,res)=>{
    res.send("Note Updated")
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});