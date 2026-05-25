const express = require('express');
const app = express();

app.use(express.json());
app.use((req,res,next)=>{
    console.log("URL : ", req.url)
    console.log("Method : ", req.method)
    next()
});
app.get('/', (req, res) => {
  res.send('Welcome to Final API Question');
});

app.get('/courses',(req,res)=>{
    res.json([
  {
    "id": 1,
    "course": "Node.js"
  },
  {
    "id": 2,
    "course": "MongoDB"
  }
])
});
app.post('/courses',(req,res)=>{
    console.log(req.body);
    console.log(req.body.course);
    req.status(201).json({
   "message": "Course Added",
   "data": req.body
})
});
app.get('/courses/:id',(req,res)=>{
    const courseId = req.params.id;
    res.send(`Fetching course ${courseId}`)
});
app.get('/search',(req,res)=>{
    const topic = req.query.topic;
    res.send(`Searching for ${topic} Courses`)
});
app.use((req,res)=>{
    res.status(404).send("page Not Found")
});
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
})