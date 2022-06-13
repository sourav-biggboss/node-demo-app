// const empolee = require('./info');
// os module
//const os = require('os');
//getting total memory of device
//console.log('it is total memory of device',os.totalmem());
// getting free space of device
//console.log('it is free space of device',os.freemem());
// getting name of device
//console.log('it is name of device',os.hostname());
// getting os type of device
//console.log('it is OS type',os.type());
// getting home folder of device
//console.log('it is home folder of device',os.homedir());
// temp folder of device
//console.log('it is a temp folder of device',os.tmpdir());
// getting os name of device
//console.log('it is os name of device',os.platform());


// path module
// const path = require('path');
// const test_path = 'proile/dasd.gh';

// // getting folder name of path
// console.log('it is file name from folder ',path.basename(test_path));
// // getting folder name of path
// console.log('it is folder name with out file name',path.dirname(test_path));
// // getting extention name from path
// console.log('it is a extention name form path',path.extname(test_path));

// fs module
// const fs = require('fs');
// // read file with out sync
// fs.readFile('./images.json','utf8',function (error,data) {
// 	if(error === null){
// 		console.log(data);
// 	} else {
// 		console.log(error);
// 	}
// });

// // read file with sync
// const data = fs.readFileSync('images.json');
// console.log('this is in the file - with sync',data.toString());

// // write file async
// fs.writeFile('doc.txt','hello hiiiii i am naruto 😁',(error,res) => {
// 	console.log('file is writed as in doc.txt, file error is '+error+' and response is '+res+'');
// });
// console.log('code running');  

// // write file with sync

// fs.writeFileSync('doc.txt','Big fan of anime');

// import type 

// comman js import
// const animeList = require('./module-type');
// console.log('this is import using comman js module ',animeList());
// es6 module import 
// import {animeList} from './module-type.js'
// console.log('this is es6 import type',animeList());
// es6 import alies 

// import {animeList as listAnime } from './module-type.js'

// console.log('this is es6 import as alies listAnime',listAnime());

// es6 import default

// import myAnimeList from './module-type.js';
// console.log('is is default function ',myAnimeList());

// es6 module all
// import * as anime from './module-type.js';

// console.log('This is class of all module-type es6  ',anime);
// console.log('the default function is ',anime.default());
// console.log('other function is animeList',anime.animeList());

// url module

// const url = require('node:url');

// const urlGoogle = new URL('https://google/');
// urlGoogle.pathname = 'search/';
// urlGoogle.search ='?q=test';
// urlGoogle.hash = '#1';
// urlGoogle.port = 8080;

// console.log('url is '+urlGoogle.href, urlGoogle);

// event Emitter module

// const EventEmitter  = require('events');
 
// class MyEventEmitter extends EventEmitter {};
// const myEventEmitter =  new MyEventEmitter;
 
// myEventEmitter.on('notifyMessage' , () => {
//	 console.log('EventEmitter Working Fine');
// });
 
// console.log('code is working');
// myEventEmitter.emit('notifyMessage');
 
// http module

const http = require('http');
const port = process.env.PORT || 8005;
const server = http.createServer((req,res)=>{
	req.statusCode = 200;
	if(req.url = '/'){
	res.setHeader('Content-Type','text/html');
	res.end('Hii<h1>dsa</h1>url is'+req.url);
	} else {
		res.end('404 in'+req.url);
	}
	
});

server.listen(port,() => {
	console.log('server is running on '+port);
})
