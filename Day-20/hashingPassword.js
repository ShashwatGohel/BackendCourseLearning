// ES IMport Method
import bcrypt from "bcryptjs";

const hashedPassword = await bcrypt.hash(
    "123456",
    10
);

console.log(hashedPassword);

// Require Method
const bcrypt = require("bcryptjs");

async function hashPassword() {
    const hashedPassword = await bcrypt.hash(
        "123456",
        10
    );

    console.log(hashedPassword);
}

hashPassword();

//Promise Syntax 
const bcrypt = require("bcryptjs");

bcrypt.hash("123456", 10)
    .then(hashedPassword => {
        console.log(hashedPassword);
    })
    .catch(error => {
        console.log(error);
    });