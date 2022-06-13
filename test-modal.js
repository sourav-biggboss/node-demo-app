// http module
const http = require('http');
const server = http.createServer((request,response) => {
	response.writeHead(200,{'Content-Type':'text/html'}); // seting header
	response.write('hello'); // content
	response.end();// response end
}).listen(8005);