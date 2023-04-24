const  User = require ("./model") 

const registerUser = async (req, res) => {
    try { 
        // const user = await User.create({
        //     username: req.body.username,
        //     email: req.body.email,
        //     password: req.body.password
        // });
        const user = await User.create(req.body)
        res.status(201).json({
            message: "success",
            user: {username: req.body.username, email: req.body.email}
        })
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error})
    }
}

//TODO: Add the rest of the CRUD operations
// getAllUsers
// updateUser
// deleteUser

module.exports = {
    registerUser
}