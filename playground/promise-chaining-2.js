require("../src/db/mongoose")
const Task = require("../src/models/task")

Task.findByIdAndDelete("5ed8a3b83e2952e84f92e58a").then(() => {
    return Task.countDocuments({ completed: false })
}).then((tasks) => {
    console.log(tasks);
}).catch((e) => {
    console.log(e);
})