// url module
const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer(function (httpRequest,Httpresponse) {
    Httpresponse.writeHead(200,{'Contant-Type':'text/html'});
    let appUrl = "."+url.parse(httpRequest.url,true).pathname;
    console.log(appUrl);
    fs.readFile(appUrl,(error,responseTempate)=>{
        if (error) {
            Httpresponse.writeHead(404,{'Contant-Type':'text/html'});
            Httpresponse.write("File Not Found");
        } else {
            Httpresponse.write(responseTempate);
        }
        Httpresponse.end();
    });
}).listen(8005,()=>{
    console.log('Server is Running');
});

