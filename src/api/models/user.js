const mongoose = require('mongoose');

let schema = mongoose.Schema({
    userName:{type:String,required:true},
    mobileNo:{type:Number,required:true},
    email:{type:String,required:true,index:{unique:true}},
    password:{type:String,required:true}
});

module.exports = mongoose.model('users',schema)