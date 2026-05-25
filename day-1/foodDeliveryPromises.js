const promise = new Promise((resolve,reject)=>{
    let success = false;
    if(success){
        resolve("Success");
    }
    else{
        reject("Failed");
    }
});

promise
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    });