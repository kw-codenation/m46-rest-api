const User = require("../users/model") 

const bcrypt = require("bcrypt")

const saltRounds = process.env.SALT_ROUNDS

const hashPass = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, parseInt(saltRounds))
        next()
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error})
    }
}

const comparePass = async (req, res, next) => {
    try {
        //TODO: 
        // Find user in our database using the username passed in req.body
        // req.user = await User ....

        // use .compare() method to compare if the plain text password matches the hashed version stored in the database 

        // Error handeling if password don't match OR username doesn't exist in the database 

        // if they do match, continue to the controller
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error})
    }
}

module.exports = {
    hashPass
}