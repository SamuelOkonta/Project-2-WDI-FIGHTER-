const Comment = require('../models/Comment')
const User = require('../models/User')
// const Character = require('../models/Character')


const commentController = {
    index: (req, res) => {
        
        Comment.find()
            .populate('comment')
            .then(comments => {
                res.render('comment/index', { comments })
            })
    },
    new: (req, res) => {
        res.render('comment/new', { userId: req.params.userId })
    },
    show: (req, res) => {
        Comment.findById(req.params.commentId).populate('comment')
            .then(comment => {
                console.log(comment)
                res.render('comment/show', { comment, userId: req.params.userId })
            })
    },
    create: (req, res) => {
        User.findById(req.params.userId).then((user) => {
            Comment.create(req.body).then(comment => {
                user.comment.push(comment)
                user.save()
                res.redirect(`/users/${req.params.userId}/comments/${comment._id}`)
            })
        })   
    },
    edit: (req, res) => {
        User.findById()
        Comment.findById(req.params.commentId)
        .then(comment => {
            res.render('comment/edit', {
                comment,
                userId: req.params.userId,
                commentId: req.params.commentId
            })
        })
    },
        delete: (req, res) => {
            Comment.findByIdAndDelete(req.params.commentId).then(() => {
                res.redirect(`/users/${req.params.userId}/`)
            })
            .then(() =>
            console.log(`Deleted user with user id of ${req.params.commentId}`)
            )
        }

}

module.exports = commentController