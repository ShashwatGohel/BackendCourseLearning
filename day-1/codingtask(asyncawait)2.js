const readlineSync = require("readline-sync");

const fetchTransaction = new Promise((resolve, reject) => {

    setTimeout(() => {

        let balanceavailabe = 20000;

        let amountToWithdraw =
            Number(readlineSync.question("Enter amount to withdraw: "));

        if (balanceavailabe > amountToWithdraw) {

            resolve({
                transactionId: 101,
                amount: amountToWithdraw,
                status: "Transaction Successful"
            });

        } else {

            reject("Insufficient Balance");

        }

    }, 3000);

});

async function getBankTransaction() {

    try {

        console.log("Fetching Bank Transaction");

        const transaction = await fetchTransaction;

        console.log(transaction);

    }

    catch (error) {

        console.log(error);

    }

}

getBankTransaction();