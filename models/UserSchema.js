const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create user Schema & model 
const UserSchema = new Schema({
    Username : {
        type: String,
        unique:true,
        required: [true, "Username field is required"],
    },

    cakeday : {
        type: Date
    },
    Email: {
        type: String,
        unique:true,
        required: [true, "Email field is required"]
    },
    Password: {
        type: String,
        required: [true, "Password field is required"],
        minlength:[8,"password too short"]
        
    },
 Subscriptions :[String],

 moderates:[String],

 ModReq:[String],

 blockedUsers:[String],

 Friends:[String],

 SentReq:[String],

 RecReq:[String],

 SavedPosts:[{
    postId:String,
    title:String
 }],

 About: String,

 karma : {type: Number, default:0}


});

const User = mongoose.model("User", UserSchema);

module.exports = User;
