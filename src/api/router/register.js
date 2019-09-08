const express = require('express');
const router = express.Router();
const UserController = require('./../controller/user.controller');
const jwt = require('jsonwebtoken');
let userController = new UserController();

router.post('/',(req,res,next)=>{
    userController.register(req.body,function(err,data){
        if(err){
            res.send(err);
        }else{
            let token = jwt.sign({email:data.email},"productKey");
            res.send({mes:data,token});
        }
    })
});

module.exports = router;