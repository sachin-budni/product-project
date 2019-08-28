const mongoose = require("mongoose");

let orderSchema = mongoose.Schema({
    name:String,
    price:Number
})

module.exports = mongoose.model("Order",orderSchema);