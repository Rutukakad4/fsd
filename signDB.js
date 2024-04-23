const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const url="mongodb://localhost:27017/signup";

const urlencoder=bodyparser.urlencoded({extended:false});

mongoose.connect(url).then((res)=>{
    console.log("connect succesfully");
  
}).catch((err)=>{
    console.log(err);
});

//schema
const signupSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number

});

//model
const signupCollecton=new mongoose.model('formdata',signupSchema);

app.get('/',(req,res)=>{
     res.sendFile(__dirname+"/"+"signup.html")
})


//insert data

app.post('/form_data',urlencoder, async(req,res)=>{
 const data=new signupCollecton({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    phone:req.body.phone
 })

 const savedata=await data.save();
 console.log(savedata);
 res.end("data inserted");
});






app.listen(2055);
console.log("server is started");