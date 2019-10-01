const User = require('./../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
function UserController(){}

UserController.prototype.register = function(data,callback){
    bcrypt.hash(data.password,saltRounds,(err,hashCode)=>{
        let user = new User({
            userName:data.userName,
            email:data.email,
            mobileNo:data.mobileNo,
            password:hashCode
        });
        user.save(function(err,product){
    
            callback(err,product);
        });
    });
};

UserController.prototype.login = function(data,callback){
    User.findOne({email:data.email},function(err,res){
        if(res){
            bcrypt.compare(data.password, res.password, function (err, result) {
                if(result){
                    callback(err,{
                        _id:res._id,
                        userName:res.userName,
                        email:res.email,
                        mobileNo:res.mobileNo
                    });
                }else{
                    callback("wrong password")
                }
            });
        }else{
            callback("user is doesn't exist")
        }
    });
}

UserController.prototype.getUser = function(data,callback){
    User.findOne({_id:data._id},function(err,res){
        callback(err,res);
    });
}

UserController.prototype.currentUser = function(data,callback){
    jwt.verify(data,'productKey',function(err,data){
        console.log(data)
        User.findOne({email:data.email},function(err,res){
            callback(err,res);
        })
    })
}

module.exports = UserController;