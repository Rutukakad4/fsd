const express=require('express');
const app=express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/student',(req,res)=>{
    res.render('student');
});

app.get('/course',(req,res)=>{
    res.render('course');
});



app.listen(2004);
console.log("server started..");