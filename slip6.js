const express=require('express');
const app=express();
const mongoose=require('mongoose');

const url="mongodb://localhost:27017/movie";

mongoose.connect(url).then((res)=>{
    console.log("database connected!..");

});

//schema for film

const filmSchema=new mongoose.Schema({
    name:String,
    ticket:Number
});

const filmCollection=new mongoose.model('film',filmSchema);

const insertFilmData= async()=>{
  const data= await filmCollection.insertMany([
    {
        name:"Fighter",
        ticket:350
    },
    {
        name:"Shaitan",
        ticket:300
    },
  ]);
  console.log(data);
};
// insertFilmData();

//schema for actor
const actorSchema=new mongoose.Schema({
    name:String,
    age:Number,
    birthplace:String
});

const actorCollection=new mongoose.model('actor',actorSchema);

const insertActorData= async()=>{
const data=await actorCollection.insertMany([
    {
        name:"Rutik Kroshen",
        age:52,
        birthplace:"California"
    },
    {
        name:"ajay devgan",
        age:54,
        birthplace:"mumbai"
    },
    {
        name:"salman",
        age:42,
        birthplace:"india"
    },
    {
        name:"kajal devgan",
        age:34,
        birthplace:"California"
    }
]);
console.log(data);
}

// insertActorData();

//find data slip14 que
const readdata=async()=>{
const data=await actorCollection.find({birthplace:"California"}).count();
console.log("actors born in california:",data);
};
readdata();






app.listen(2006);
console.log("server started...");