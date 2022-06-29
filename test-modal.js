// http module
const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const server = http.createServer((request,response) => {
	response.writeHead(200,{'Content-Type':'text/html'}); // seting header
	if (request.url == '/pages/upload') {
		// const imagesUpload = new formidable.IncomingForm();
		// imagesUpload.parse(request,function (errorFileUpload,fields,files){
			
		// 	if(errorFileUpload) {
		// 			response.writeHead(500,{'Content-Type':'text/html'});
		// 			response.write('File UPloading Failed');
		// 	} else {
		// 		const fileTempFilePath =  files.images.pathname;
		// 		const fileUploaded = './'+files.images.originalFileName;
				
		// 		fs.rename(fileTempFilePath,fileUploaded,(errRmv)=>{
		// 			if (errRmv){
		// 				response.writeHead(500,{'Content-Type':'text/html'});
		// 				response.write('File UPloading Failed');
		// 			} else {
		// 				response.write('File is  Uploadeds');
		// 			}
		// 			response.end();
		// 		})
		// 	}
		// 	response.end();
		// });
	}
	else if (request.url == '/'){
		response.write('hello'); // content
		response.end();// response end
	}
	else {
		var viewTemplatePath = '.'+request.url;
		fs.readFile(viewTemplatePath,(errorReadFile,fileData)=> {
			if (errorReadFile){
				response.writeHead(400,{'Content-Type':'text/html'}); // seting header
				response.write('File Not Found'); // content
			}else {
				response.write(fileData.toString()); // content
			}
			response.end();// response end
		});
	}

}).listen(8005);