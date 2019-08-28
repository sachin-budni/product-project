const express = require("express");
const app = express();
const products = require("./api/router/products"); 
const orders = require('./api/router/order');

const bodyParser = require('body-parser');

const mongoose = require("mongoose");

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


app.use('/products',products);
app.use('/orders',orders);

app.use((req,res,next)=>{
    const error = new Error("Not Found!");
    error.status = 404;
    next(error);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log("Running 5000"));