const mongoose = require("mongoose");

const Schema = require('mongoose').Schema;


const jobSchema = new Schema({
    title: { type: String, required: true },
    companyName: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    contact: { type: String, required: true },
    website: String,
    postDate: { type: String, required: true },
});

module.exports = mongoose.model("Job", jobSchema);
