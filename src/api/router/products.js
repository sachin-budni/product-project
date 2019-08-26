const express = require("express");
const router = express.Router();

const Product = require('./../models/product');

router.get('/',(req,res,next)=>{
    Product.find({}).exec().then(doc=>{
        res.status(200).json({
            message:"handling GET Request to /products",
            data:doc
        })
    })
})

router.post('/',(req,res,next)=>{
    console.log(req.body)
    if(req.body && req.body.name != undefined && req.body.price != undefined){
        const product1 = new Product({
            name:req.body.name,
            price:req.body.price
        }); 
        product1.save();
    }else{
        console.log("error")
    }
    res.status(200).json({
        message:"handling POST Request to /products"
    })
})

router.get('/:productId',(req,res,next)=>{
    const id =  req.params.productId;
    Product.findById(id).exec().then(doc=>{
        res.status(200).json({
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
    Product.up
    res.status(200).json({
        message:"update id data = "+id
    })
});

router.delete('/:productId',(req,res,next)=>{
    const id =  req.params.productId;
    res.status(200).json({
        message:"delete id data = "+id
    })
})

module.exports = router;