const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

// initialize the schema with a configuration object
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

