var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('abc.txt',function(err,data){
        fs.appendFile('second.txt',data,function(err){
            console.log(err);
            console.log('Append sucessfully');
        })
        res.end();
    })
}).listen(1000);