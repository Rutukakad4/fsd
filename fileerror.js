const http=require('http');
const fs=require('fs');
const path=require('path');

http.createServer((req,res)=>{

    const filename=path.join(__dirname+req.url);
    
    fs.readFile(filename,'utf-8',(err,data)=>{
        if(err){
            res.writeHead(404,{'content-type':'text/plain'});
            res.end("Something going wrong");
        }else{
            res.writeHead(200,{'content-type':'text/plain'});
            res.end(data);
        }
    })
}).listen(2003);
console.log("server connected...");