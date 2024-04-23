const express=require('express');
const app=express();
const mongoose=require('mongoose');
const url="mongodb://localhost:27017/student";


    mongoose.connect(url).then((res)=>{
        console.log("Database started..");
    });

    //create schema for ug
    const ugSchema=new mongoose.Schema({
        ugcourse:String,
        courseNo:Number
    })
    
    const ugCollection=new mongoose.model('UG',ugSchema);

    //create schema for pg
    const pgSchema=new mongoose.Schema({
        pgcousrse:String,
        no_of_student:Number
    })

    const pgCollection=new mongoose.model('PG',pgSchema);

    //insert documnet for UG
    const insertData=async()=>{
   const data=await ugCollection.insertMany([
    {  
     ugcourse:"bcs",
     courseNo:3200
     },
    { ugcourse:"bca",
    courseNo:3200},
    ]);
    console.log(data)
    };
    insertData();

    const insertpgData=async()=>{
        const data=await pgCollection.insertMany([
         {  
            pgcousrse:"msccs",
            no_of_student:987
          },
         { 
            pgcousrse:"mba",
            no_of_student:807
        },
         ]);
         console.log(data)
         };
         insertpgData();



app.listen(2009);
console.log("server is started..");
