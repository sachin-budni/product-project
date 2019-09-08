const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
let UserController = require('./../controller/user.controller'); 
const userController = new UserController();

router.post('/',(req,res,next)=>{
    userController.login(req.body,function(err,data){
        if(data){
            let token = jwt.sign({email:data.email},"productKey");
            console.log(token);    
            res.send({mes:data,token})
        }else{
            res.send({err:err})
        }
    })
});

module.exports = router;