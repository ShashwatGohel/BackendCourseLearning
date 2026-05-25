const express = require('express');
const app = express();

app.use(express.json());
app.use((req,res,next)=>{
    console.log("URL : ", req.url);
    console.log("Method : ", req.method);
    next();
}); 

app.get('/', (req, res) => {
  res.send('Welcome to Employee API');
});
app.get('/employees',(req,res)=>{
    res.json([
  {
    "id": 1,
    "name": "Tony"
  },
  {
    "id": 2,
    "name": "Peter"
  }
])
});
app.post('/employees',(req,res)=>{
    console.log(req.body);
    console.log(req.body.name);
    res.status(201).json({
        message: "Employee Added Successfully",
        employee: req.body
    })
});
app.get('/employees/:id',(req,res)=>{
    const employeeId = req.params.id;
    res.send(`Fetching employee ${employeeId}`)
});
app.get('/filter',(req,res)=>{
    const department = req.query.department;
    res.send(`Filtering ${department} Employee`)
});
app.use((req,res)=>{
    res.status(404).send("Page Not Found");
});
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
}); 