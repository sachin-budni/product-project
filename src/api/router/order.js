const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"get GET data from /order"
    })
})

router.post('/',(req,res,next)=>{
    console.log(req.body)
    const order ={
        productId:req.body.id,
        productName:req.body.name
    }
    res.status(200).json({
        message:"order POST the data",
        data:order
    })
})

router.post('/:orderId',(req,res,next)=>{
    const id = req.params.orderId;
    if(id  == "newOrder"){
        res.status(200).json({
            message:"order GET the data" + id
        })
    }else{
        res.status(200).json({
            message:"order Specifies the proper data"
        })
    }
})

router.patch('/:orderId',(req,res,next)=>{
    const id = req.params.orderid;

    res.status(200).json({
        message:"update Successfully"
    })
})

router.delete('/:orderId',(req,res,next)=>{
    const id =  req.params.orderId;
    res.status(200).json({
        message:"delete Successfully"
    })
})

module.exports = router;