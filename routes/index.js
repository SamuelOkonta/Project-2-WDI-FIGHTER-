
const express = require('express')
const router = express.Router()
// const applicationController = require('../controllers/applicationController')
const characterController = require('../controllers/characterController.js')
const userController = require('../controllers/userController.js')
const commentController = require('../controllers/commentController')


router.get('/', characterController.index)
router.get('/new', characterController.new)
router.post('/', characterController.create)
router.get('/characters/:characterId', characterController.show)
router.get('/characters/:characterId/edit', characterController.edit)
router.put('/characters/:characterId', characterController.update)
router.delete('/characters/:characterId', characterController.delete)


router.get('/users', userController.index)

router.get('/comment', commentController.index)
rou



router.get('/users/new', userController.new)

router.post('/users', userController.create)

router.get('/users/:userId', userController.show)


router.delete('/users/:userId', userController.delete)


router.get('/users/:userId/comment/new', commentController.new)

router.post('/users/:userId/comments', commentController.create)

router.get('/users/:userId/comments/:commentId', commentController.show)


router.delete('/users/:userId/comments/:commentId', commentController.delete)

module.exports = router