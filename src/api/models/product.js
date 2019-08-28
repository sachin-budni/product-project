const mongoose =  require("mongoose");

const productSchema = mongoose.Schema({
    profileImage:{type:String,required:true},
    headerName:{type:String,required:true},
    subHeaderName:{type:String,required:true},
    image:{type:String,required:true},
    desc:{type:String,require:true},
    likes:{type:Number}
})

module.exports = mongoose.model('Product',productSchema);