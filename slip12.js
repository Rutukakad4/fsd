const express=require('express');
const app=express();
const mongoose=require('mongoose');
const url="mongodb://localhost:27017/staff";
mongoose.connect(url).then((res)=>{
    console.log("Database conncetd");
});

//create schema for teacher
const teacherSchema=new mongoose.Schema({
    tno:Number,
    tname:String,
    subject:String
});

const teacherCollection=new mongoose.model('teacher',teacherSchema);

const insertData=async()=>{
const data=await teacherCollection.insertMany([
    {
        tno:1,
        tname:"Priyanka",
        subject:"Web-Technology"
    },
    {
        tno:2,
        tname:"Renuka",
        subject:"JAVA"
    },
    {
        tno:3,
        tname:"Chitra",
        subject:"Os"
    },
    {
        tno:4,
        tname:"Swati",
        subject:"Machine learning"
    },
    {
        tno:5,
        tname:"Manisha",
        subject:"Python"
    },
]);
console.log(data);
}
// insertData();

const finddata=async()=>{
const data=await teacherCollection.find({subject:"JAVA"});
console.log(data);
};
finddata();


app.listen(2012);
console.log("server started...");