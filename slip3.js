const http=require('http');
const uc=require('upper-case');

http.createServer((req,res)=>{

    let username=uc.upperCase("raj");

    res.write("hello,"+username+",nice to meet you!\n");
    res.write(uc.upperCase("Hello, Welcome in Node js"));

    // res.end(`hello,${username},nice to meet you!`);
    res.end();


}).listen(2003);
console.log("server started..");
