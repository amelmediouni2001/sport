// import mongoose module
const mongoose = require("mongoose");

// create team schema
const teamSchema  = mongoose.Schema({
    name: String,
    owner: String,
    stadium: Number,

});

//affect model name to schema
const team = mongoose.model("teamModel", teamSchema);

//export team
module.exports = team;
