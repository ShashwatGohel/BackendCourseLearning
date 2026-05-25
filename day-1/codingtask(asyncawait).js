// Requirements:

// Promise
// setTimeout(2000)
// productAvailable variable
// resolve product object
// reject error
// async function
// await
// try/catch

const fetchProductData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let ProductAvailable = 1;
        if(ProductAvailable){
            resolve({
                id:1,
                name:"Phone",
                price:40000
            })
        }
        else{
            reject("Product Not available");
        }
    },2000);
});

async function getProductData() {
    try{
        console.log("Fetching Product Data.....");
        const product = await fetchProductData;
        console.log(product);
    }
    catch(error){
        console.log(error);
    }
}

getProductData();