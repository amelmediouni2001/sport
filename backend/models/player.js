// import mongoose module
const mongoose = require("mongoose");

// create player schema
const playerSchema  = mongoose.Schema({
    position : String,
    name: String,
    age: Number,

});

//affect model name to schema
const player = mongoose.model("PlayerModel", playerSchema);

//export player
module.exports = player;
