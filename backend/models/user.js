const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testDB');

const userSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String,
})

module.exports = mongoose.model("User", userSchema);