// const Comment = require('../models/commentController.js')
// const User = require('../models/userController.js')
const Character = require('../models/Character.js')



const characterController = {
    index: (req, res) => {
        Character.find({}).then(characters => {
            console.log(characters)
            res.render('character/index', { characters })
        })
    },
    new: (req, res) => {
        res.render('character/new')
    },
    create: (req, res) => {
        character.create(req.body).then(character => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        Character.findById(req.params.characterId).then(character => {
            
            // Comment.find(req.params.characterId).then(comments => {
                res.render('character/show', { character })   
            })
        
    },
    edit: (req, res) => {
        Character.findById(req.params.characterId).then(character => {
            res.render('character/edit', { character })
        })
    },
    update: (req, res) => {
        //Need to pass {new:true} as the third argument in order to get theupdated shop from the db
        Character.findByIdAndUpdate(req.params.characterId, req.body, { new: true }).then(() => {
            res.redirect(`/characters/${req.params.characterId}`)
        })
    },
    delete: (req, res) => {
        Character.findByIdAndDelete(req.params.characterId).then(() => {
            console.log(`Deleted character with the id of ${req.params.character}`)
            res.redirect('/')
        })
    }
}

module.exports = characterController