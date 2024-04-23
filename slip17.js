const http=require('http');
const os=require('os');

http.createServer((req,res)=>{

    console.log("os platform:",os.platform());
    console.log("os tempfile:",os.tmpdir());
    console.log("os home directory:",os.homedir());
    console.log("os hostname:",os.hostname());
    res.end();

}).listen(2017);
console.log("Server started...");