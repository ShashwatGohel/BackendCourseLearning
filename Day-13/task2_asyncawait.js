const delayPromise = new Prmoise((resoleve, reject)=>{
    setTimeout(()=>{
        reject("Something went Wrong");
    },3000)
});
async function handlePromise() {
    try{
        const data = await delayPromise
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
} handlePromise()