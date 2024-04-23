const express=require('express');
const app=express();
const mongoose=require('mongoose');

const url="mongodb://localhost:27017/company";

mongoose.connect(url).then((res)=>{
   console.log("Databse connected sucessfully!")
});

//schema for product
const productSchema=new mongoose.Schema({
    company_name1:String,
    product_name:String,
    quantity:Number
});

const productColletion=new mongoose.model('product',productSchema);

//schema for service
const serviceSchema=new mongoose.Schema({
    comapny_name:String,
    services:String,
    location:String
})

const serviceCollection=new mongoose.model('service',serviceSchema);

//insert data in product
const insertProduct=async()=>{
 const data=await productColletion.insertMany([
    { 
        company_name1:"TCS",
        product_name:"Softwares",
        quantity:231
    },
    {
        comapny_name1:"Wipro",
        product_name:"sales",
        quantity:5323
    },
    {
        comapny_name1:"TCS",
        product_name:"Cars",
        quantity:80993
    },
    {
        comapny_name1:"TCS",
        product_name:"mobilePhones",
        quantity:9823
    }
 ]);
 console.log(data);
};
// insertProduct();

//insert data for services
const insertService=async()=>{
const data=await serviceCollection.insertMany([
    {
        comapny_name:"TCS",
        services:"landline",
        location:"Pune"
    },
    {
        comapny_name:"TCS",
        services:"networks",
        location:"Hydrabad"
    },
    {
        comapny_name:"pechno",
        services:"softwares",
        location:"Mumbai"
    },
    {
        comapny_name:"TCS",
        services:"webAplication",
        location:"Chennai"
    }
]);
console.log(data);
}
// insertService();

//read data
const readProduct=async()=>{
const data=await serviceCollection.find({comapny_name:"TCS"}).limit(2);
console.log("data:",data);
}
readProduct();


app.listen(2007);
console.log("server is started..");