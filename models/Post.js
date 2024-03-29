const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
    author:String,
    place:String,
    description:String,
    hashtags:String,
    image:String,
    linkes:{
        type:Number,
        default:0,
    } 

}, {  
    timestamps:true,
});
module.exports = mongoose.model('Post',PostSchema);
