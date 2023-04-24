const { Router } = require("express")

const userRouter = Router()

const {registerUser,getAllUsers, updateUser, deleteUser } = require("./controllers") 

userRouter.post("/users/register", registerUser)

userRouter.get("/users/getUsers", getAllUsers)

userRouter.put("/users/updateUser", updateUser)

userRouter.delete("/users/deleteUser", deleteUser)


//TODO: add rest of routes for each controller

module.exports = userRouter