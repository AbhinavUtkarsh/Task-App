const express = require("express")
require('./db/mongoose')
const app = express()
const port = process.env.PORT || 3000
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Sever is up on port: ", port);
})

// const Task = require("./models/task")
// const User = require("./models/user")

// const main = async () => {
//     // const task = await Task.findById("5edaa112d6145f275ca0fb94")
//     // await task.populate("owner").execPopulate()
//     // console.log(task.owner);
//     const user = await User.findById("5edaa03227b01226a948108a")
//     await user.populate("tasks").execPopulate()
//     console.log(user.tasks);
// }
// main()