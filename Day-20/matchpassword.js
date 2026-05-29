const bcrypt = require("bcryptjs")
async function ComparePassword() {
    const isMatch = await bcrypt.compare(enteredPassword == user.password)
}
ComparePassword()

// Will return True or False 
