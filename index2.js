let http = require("http");
let fs = require('fs');
let server = http.createServer((req,res)=>{
    let body = '';
    req.on('data',(chunk)=>{

        body += chunk.toString();

    });
    req.on("end",()=>{
        res.write(body);
        fs.writeFile("data.json",body,"utf-8",(err)=>{
            if(err){
                res.write(JSON.stringify(err.message));
                res.end();
            }
            else{
                console.log("i have come");
                res.write("\n file created!!!!!!");
                res.end();
            }
        });
    });
   
})
let port = 3008;
server.listen(port,()=>{
    console.log("server running "+`http://localhost:${port}`);
})