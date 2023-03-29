const mongoose=require("mongoose");

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
    }
});

const Tweet=mongoose.model('Tweet',tweetSchema);
module.exports =Tweet;