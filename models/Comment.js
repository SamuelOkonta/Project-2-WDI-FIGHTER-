const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    name: String,
    category: String,
    description: String,
    
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      
    });
    
    
    module.exports = mongoose.model("Discussion", Discussion)
    