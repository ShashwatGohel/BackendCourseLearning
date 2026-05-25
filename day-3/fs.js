const fs = require("fs");

fs.writeFile("data.txt", "Backend Learning", (error) => {

    if(error) {

        console.log(error);

    }

    else {

        console.log("File Created");

    }

});
fs.appendFile("data.txt", "\nNode.js", (error) => {

    if(error) {

        console.log(error);

    }

    else {

        console.log("File Created");

    }

});
fs.unlink("data.txt", (error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("file Deleted");
    }
})