const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    name:String,
    email:String,
    destination:{type:String,enum:["India","Africa","Europe","America"]},
    no_of_travellers:Number,
    budget_per_person:Number

});

const PostModel = mongoose.model("trip",postSchema);

module.exports = PostModel;
