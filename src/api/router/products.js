const express = require("express");
const router = express.Router();

const ProductController = require("./../controller/product.controller");
const product = new ProductController();

router.get('/',(req,res,next)=>{
    product.getAllProducts(function(data){
        if(data){
            res.send(data);
        }else{
            res.send("error")
        }
    })
})

router.post('/',(req,res,next)=>{
    product.saveProduct(req.body,(data)=>{
        res.send(data);
    })
})

router.get('/:productId',(req,res,next)=>{
    const id =  req.params.productId;
    Product.findById(id).exec().then(doc=>{
        res.send({
            message:"handling GET Request to /products",
            data:doc
        })
    }).catch(err=>{
        res.status(200).json({
            message:"handling GET Request to /products",
            data:err
        })
    })
})

router.patch('/:productId',(req,res,next)=>{
    const id =  req.params.productId;
    product.editProduct(id,req.body,function(data){
        res.send({
            message:data
        })
    })
});

router.delete('/:productId',(req,res,next)=>{
    const id =  req.params.productId;
    product.deleteProduct(id,function(data){
        res.send(data)
    })
})

module.exports = router;