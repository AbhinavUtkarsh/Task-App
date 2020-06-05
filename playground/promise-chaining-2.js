require("../src/db/mongoose")
const Task = require("../src/models/task")

// Task.findByIdAndDelete("5ed8a3b83e2952e84f92e58a").then(() => {
//     return Task.countDocuments({ completed: false })
// }).then((tasks) => {
//     console.log(tasks);
// }).catch((e) => {
//     console.log(e);
// })
//5ed895a8eb2790e26ab1b34b
const DeleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count

}

DeleteTaskAndCount("5ed895a8eb2790e26ab1b34b").then((count) => {
    console.log("Remaining incomplete docs: ", count);
}).catch((e) => {
    console.log("Error: ", e);
})