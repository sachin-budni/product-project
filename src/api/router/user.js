const express = require('express');
const router = express.Router();
const UserController = require('./../controller/user.controller');

let userController = new UserController();

router.get('/',(req,res,next)=>{
    userController.getUser(req.body,function(err,data){
        res.send(data);
    })
});

router.get('/currentuser',(req,res,next)=>{
    // userController.currentUser(req.headers.authorization,function(err,data){
    //     res.send({
    //         userName:data.userName,

    //     });
    // })
})

module.exports = router;