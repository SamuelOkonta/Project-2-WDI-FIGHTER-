const Character = require('../models/characterController.js')
const Comment = require('../models/commentController.js')
const User = require('../models/userController.js')


const commentController = {
    index: (req, res) => {
        
        Discu.find()
            .populate('discussion')
            .then(discussions => {
                res.render('discussions/index', { discussions })
            })
    },
    new: (req, res) => {
        res.render('discussions/new', { userId: req.params.userId })
    },
    show: (req, res) => {
        Discussion.findById(req.params.discussionId).populate('discussion')
            .then(discussion => {
                res.render('discussions/show', { discussion, userId: req.params.userId })
            })
    },
    create: (req, res) => {
        User.findById(req.params.userId).then((user) => {
            Discussion.create(req.body).then(discussion => {
                user.discussion.push(discussion)
                user.save()
                res.redirect(`/users/${req.params.userId}/discussions/${discussion._id}`)
            })
        })   
    },
    // edit: (req, res) => {
    //     User.findById()
    //     Discussion.findById(req.params.discussionId)
    //     .then(discussion => {
    //         res.render('discussions/edit', {
    //             discussion,
    //             userId: req.params.userId,
    //             discussionId: req.params.discussionId
    //         })
    //     })
    // },
        delete: (req, res) => {
            Discussion.findByIdAndDelete(req.params.discussionId).then(() => {
                res.redirect(`/users/${req.params.userId}/`)
            })
            .then(() =>
            console.log(`Deleted user with user id of ${req.params.discussionId}`)
            )
        }

}