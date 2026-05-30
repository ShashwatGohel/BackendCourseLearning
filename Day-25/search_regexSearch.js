// Simple Search()
// if search=Peter
// it will only return the names Peter
const user = await Users.find({name:req.query.search})

// Regex Search()
// in this if the search=Peter
// it will return me : Peter, pet,PET,PETER,PeTeR......

const user = await User.find({
    $regex:req.query.search,
    $option:"i"
})

