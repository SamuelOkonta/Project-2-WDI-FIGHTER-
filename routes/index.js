
const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/applicationController')

const characterController = require('../controllers/characterController.js')



router.get('/', characterController.index)
router.get('/new', characterController.new)
router.post('/', characterController.create)
router.get('/:characterId', characterController.show)
router.get('/:characterId/edit', characterController.edit)
router.put('/:characterId', characterController.update)
router.delete('/:characterId', characterController.delete)



module.exports = router