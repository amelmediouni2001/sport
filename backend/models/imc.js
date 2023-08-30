// import mongoose module
const mongoose = require("mongoose");

// create imc schema
const imcSchema  = mongoose.Schema({
    poid: Number,
    taille: Number,
    imcValue: Number,
    name: String,
});

//affect model name to schema
const imc = mongoose.model("ImcModel", imcSchema);

//export imc
module.exports = imc;