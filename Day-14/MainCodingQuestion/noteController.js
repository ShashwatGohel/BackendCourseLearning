const fs = require('fs');
const getNotes = (req, res) => {
    
    fs.readFile('notes.txt', 'utf-8', (err, data) => {
    
        if(err){
            return res.status(400).send({
                success: false,
                message:"File has Eror",
            })
        }
    
        console.log(data);
        res.send({
            success: true,
            message: "Notes Found",
            data:notes
        })
    
    });

};
const postNotes = (req, res) => {
    fs.readFile('notes.txt', 'utf-8', (err) => {
    
        if(err){
            console.log(err);
            return;
        }
        const notes = JSON.parse(data)
        const newNote = {
            id:notes.length+1,
            title : req.body.title
        }
        notes.push(newNote)
    
    });
    fs.writeFile('notes.txt', JSON.stringify(notes), (err) => {
    
        if(err){
            return res.status(400).send({
                success: false,
                message:"Could not Write",
            });
        }
        res.status(200).send({
            success: true,
            message:"Content Written",
            data:newNote
        });
    
    });
};
module.exports = {
    getNotes,postNotes
}