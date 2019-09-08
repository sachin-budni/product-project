const userController = require('./user.controller');
const jwt = require("jsonwebtoken");

function AuthController(){};

AuthController.prototype.auth = function(req,res,next){
    let token = jwt.verify(req.headers.authorization,'productKey',function(err,data){
        if(err){
            console.log(err)
            res.send(err)
        }else{
            next();
        }
    });
};

module.exports = AuthController;