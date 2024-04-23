const express=require('express');
const app=express();
const mongoose=require('mongoose');
const url="mongodb://localhost:27017/bus";

mongoose.connect(url).then((res)=>{
    console.log("Database connected succesfully...");
});

//create schema for bus-depo
const busdepoSchema=new mongoose.Schema({
    name:String,
    noofbus:Number
})

const busdepoCollection=new mongoose.model('bus-depo',busdepoSchema);

//create schema for bus-route
const busrouteSchema=new mongoose.Schema({
    busname:String,
    route:String
});
const busrouteCollection=new mongoose.model('bus-route',busrouteSchema);

const insertdepoData=async()=>{
const data=await busdepoCollection.insertMany([
    {
        name:"Hdapasardepo",
        noofbus:4500
    },
    {
        name:"warjedepo",
        noofbus:3500
    },
    {
        name:"ukdepo",
        noofbus:2900
    }
]);
console.log(data);
}
// insertdepoData();

const insertrouteDta=async()=>{
  const data=await busrouteCollection.insertMany([
    {
        busname:"satara64",
        route:"Pune to Satara"
    },
    {
        busname:"hadapsar119",
        route:"Pune to hadapsar"
    },
    {
        busname:"malwadi202",
        route:"Pune to malwadi"
    }
  ]);
  console.log(data);
};
// insertrouteDta();

//find data
const finddata=async()=>{
const data=await busrouteCollection.find({route:"Pune to Satara"});
// console.log(data[0].busname);
console.log(data);
};
finddata();
