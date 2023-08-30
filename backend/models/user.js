// import mongoose module
const mongoose = require("mongoose");
// import mongoose unique validator module
const uniqueValidator = require("mongoose-unique-validator");

// create user schema
const userSchema  = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type: String, unique : true},
    pwd: {type: String},
    tel: String,
    role: String,
    avatar: String,
    
    
});
userSchema.plugin(uniqueValidator);


//affect model name to schema
const user = mongoose.model("UserModel", userSchema);

//export user
module.exports = user;
