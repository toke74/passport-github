const mongoose = require("mongoose");
const { Schema } = mongoose;

//create user schema
const userSchema = new Schema({
  username: String,
  githubId: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;
