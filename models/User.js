const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;


const User = new Schema({
    email: String,
    password: String,
    discussion: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment"
      }
    ]
  });

module.exports = mongoose.model("User", User);

