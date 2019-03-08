module.exports = userController

const express = require('express')
const Character = require('../models/Character')
const Comment = require('../models/Comment')
const User = require('../models/User')

const userController = {
    index: (req, res) => {
       
        User.find()
            .populate('comment')
            .then(users => {
                res.render('users/index', { users })
            })
    },
    new: (req, res) => {
        res.render('users/new')
    },
    show: (req, res) => {
        User.findById(req.params.userId).populate('comment')
            .then(user => {
                res.render('users/show', { user })

            })
    },
    create: (req, res) => {
        User.create({
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            res.redirect(`/users/${user._id}`)
        })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId).then(() => {
            res.redirect('/users')
        })
        .then(() =>
        console.log(`Deleted user with ID of ${req.params.userId}`)
        )
    }
}

module.exports = userController











