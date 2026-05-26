const createUser = (req,res)=>{
    const {name, role} = req.body
    if(!name || !email){
        return res.status(400).json({
            message: "Name and Role are required"
        });
    }
    const newUser={
        id: users.length+1,
        name,role
    };
    users.push(newUser)
    res.status(201).json(newUser)
}