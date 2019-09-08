const Product = require("./../models/product");

function ProductController(){}

// GET All Products data
ProductController.prototype.getAllProducts = function(callback){
    Product.find({}).exec().then(data=>callback(data));
}

//POST the Product
ProductController.prototype.saveProduct = function(productData,callback){
    let product = new Product(productData)
    product.save().then(data=>callback(data));
}

//GET Single Product
ProductController.prototype.getProduct = function(id,callback){
    Product.find(id).exec(callback);
}

//Edit Product
ProductController.prototype.editProduct = function(id,data,callback){
    Product.findById(id).exec().then(d=>{
        if(d != null){
            Product.updateOne({_id:id},{$set:data}).then(d=>callback(d))
        }else{
            console.log(d)
        }
    });
}

//DELETE the Product
ProductController.prototype.deleteProduct = function(id,callback){
    console.log(id)
    Product.findById(id,(err,data)=>{
        if(err){
            console.log("error")
        }else{
            data.remove().then(d=>callback(d))
            // Product.remove(id).then(d=>callback(d));
        }
    })
    // Product.deleteOne(id).then(d=>callback(d));
}

module.exports = ProductController;