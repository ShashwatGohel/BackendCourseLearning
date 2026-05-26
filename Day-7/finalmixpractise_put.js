const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
let employees = [
   {
      id: 1,
      name: "Tony",
      department: "HR"
   }
];
let courses = [
   {
      id: 1,
      course: "Node.js",
      duration: "1 month"
   }
];
let products = [
   {
      id: 1,
      name: "Laptop",
      price: 50000
   }
];
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

//Employees put
app.put('/employees/:id',(req,res)=>{
    const employee = employees.find(employee=>employee.id == req.params.id)
    if(employee){
        employee.department = req.body.department
        res.send({
            message: "Employee Department Updated",
            employees
        })
    }
});
//Courses Put
app.put('/courses/:id',(req,res)=>{
    const course = courses.find(course=>course.id == req.params.id)
    if(course){
        course.duration = req.body.duration
        res.send({
            message:"Course Duration Updated",
            courses
        })
    }
});
//Update product Price Via Put 
app.put('/products/:id',(req,res)=>{
    const product = products.find(product=>product.id == req.params.id)
    if(product){
        product.price = req.body.price
        res.send({
            message: "Product Price Updated",
            products
        })
    }
});

//Put and Delete Mix
app.delete('/movies/:id',(req,res)=>{

    movies = movies.filter(
        movie => movie.id != req.params.id
    );

    res.send({
        message: "Movie Deleted Successfully",
        movies
    });

});

app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});