const mongoose = require('mongoose')
const Schema = require('mongoose').Schema;

const userSchema = new Schema({
    username: { type: String, required: true, index: true },
    password: { type: String, required: true },
    favorites: [String], // id of job schema
    jobPosts: [String], // id of job schema
});

module.exports = mongoose.model("User", userSchema);
