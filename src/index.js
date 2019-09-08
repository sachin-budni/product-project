const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const products = require("./api/router/products"); 
const orders = require('./api/router/order');
const login = require('./api/router/login');
const register = require('./api/router/register');
const user = require('./api/router/user');
const AuthController = require('./api/controller/auth.controller');
let authController = new AuthController();

app.use(bodyParser.json({limit: '50mb'}))

mongoose.connect("mongodb://localhost/product?poolSize=100",{ useNewUrlParser: true },(error)=>{
    if(error){
        console.log("MongoDb connection failed");
        console.log(error);
    } else {
        console.log("MongoDb connection successful");
    }
});

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method == "OPTIONS"){
        res.header("Access-Control-Allow-Methods",'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next();
})

app.use('/login',login);
app.use('/register',register);
app.use('/products',authController.auth,products);
app.use('/orders',orders);
app.use('/users',authController.auth,user)

app.use((req,res,next)=>{
    const error = new Error("Not Found!");
    error.status = 404;
    next(error);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log("Running 5000"));