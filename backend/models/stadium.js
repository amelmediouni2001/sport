// import mongoose module
const mongoose = require("mongoose");

// create stadium schema
const stadiumSchema  = mongoose.Schema({
    name: String,
    country: String,
    capacity: Number,

});

//affect model name to schema
const stadium = mongoose.model("StadiumModel", stadiumSchema);

//export stadium
module.exports = stadium;
