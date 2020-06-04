require("../src/db/mongoose")

const User = require("../src/models/user")

//5ed89f5e0ad38fe542f68871

User.findByIdAndUpdate("5ed8a35225c7bfe7cb5da6f4", { age: 1 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})