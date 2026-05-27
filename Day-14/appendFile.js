const fs = require('fs');

fs.appendFile('data.txt', '\nHello Shashwat', (error) => {

    if(error){
        console.log(error);
        return;
    }

    console.log('Data appended successfully');

}); 