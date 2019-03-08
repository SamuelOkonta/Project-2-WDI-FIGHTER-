const { Chirp } = require("../models/Chirp")
const User = require('../models/User')

const userController = {
    index: (req, res) => {
        User.find()
        .populate('chirps')
        .then(users => {
            res.render('users/index',{users})
        })
    },
    new: (req, res) => {
        
    },
    create: (req, res) => {
        User.create({
            email: 'test@test.com',
            password: '1212'
        }).then(user => {
            res.send(user)
        })
    },
    show: (req, res) => {
        User.findById(req.params.userId)
        .populate('chirps')
        .then(user => {
            res.render('users/show', {user})
        })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId).then(() => {
            res.send(`Deleted user with ID of: ${req.params.userId}`)
        })
    }
}

module.exports = userController