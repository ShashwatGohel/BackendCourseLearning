// Requirements:
// Promise
// setTimeout(2500)
// restaurantOpen variable
// take user input using readline-sync
// ask user for food item
// if restaurant open:
// resolve food order object
// else:
// reject error
// async function
// await
// try/catch

const  fetchFoodOrder = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let restaurantOpen = true;
        if(restaurantOpen){
            resolve({
                orderId: 501,
                item:"Pizza",
                status: "Order Confirmed"
            })
        }
        else{
            reject("Restaurant Closed");
        }
    },2500);
}) 
async function getFoodOrder() {
    try{
        console.log("Fetching Order....");
        const oderDetails = await fetchFoodOrder;
        console.log(oderDetails);
    }
    catch(error){
        console.log(error);
    }
}

getFoodOrder();