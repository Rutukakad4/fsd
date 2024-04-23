const http=require('http');
const fs=require('fs');
const url=require('url');
http.createServer((req,res)=>{
 
    fs.readFile('file1.html','utf-8',(err,data)=>{
        if(err){
            res.end("something is wrong!");
        }else{
           res.writeHead(200,{'content-type':'text/html'});
           res.end(data);
           
        }
    })

}).listen(2005);
console.log("server is started..");