const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const CharacterSchema = new Schema({
    name: String,
    category: String,
    description: String,
    imgLink: String

})

module.exports = mongoose.model('Character', CharacterSchema)