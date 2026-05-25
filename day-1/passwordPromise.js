const loginPromise = new Promise((resolve,reject)=>{
    let login = true;
    if(login){
        console.log("Login SuccessFull");
    }
    else{
        console.log("Login Failed");
    }
});

loginPromise
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    });