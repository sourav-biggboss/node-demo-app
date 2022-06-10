//   http o\module 

const http = require('http');
const url = require('url');
const server  = http.createServer(function (request,response) {
    response.writeHead(200,{
        'Contant-Type':'text/html'      // Header type
    });
    const response_query = url.parse(request.url,true).query;
    response.write('<h1> '+response_query.year+' , '+response_query.month+'</h1>');
    response.end();
                        
}).listen(8005,function () {
    console.log('Server is Runnning');
})


