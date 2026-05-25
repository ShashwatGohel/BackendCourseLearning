const fetchUser = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let userFound = true;
        if(userFound){
            resolve({
                id:1,
                name:"Shashwat",
                role:"Backend"
            });
        }
        else{
            reject("User Not Found");
        }
    }, 3000);
})

async function getUserData() { 
    try{
        console.log("Fetching USer Data ........");
        const user = await fetchUser;
        console.log(user);
    }
    catch(error){
        console.log(error);
    }
}

getUserData();