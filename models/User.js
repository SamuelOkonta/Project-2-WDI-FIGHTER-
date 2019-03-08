const mongoose = require('../db/connection.js')



const User = mongoose.Schema({
    local: {
        email: String,
        password: String
    }
})



module.exports = mongoose.model('User', User)