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

// const url = require('url');

// const websiteUrl = new URL('http://google');
// websiteUrl.search = '?w=90&q=anime';
// websiteUrl.port = 8080;
// websiteUrl.hash = '#info';
// websiteUrl.pathname = '/aot/anime';
// console.log('this is url ',websiteUrl.href);
// console.log(websiteUrl);

// event module

const EventEmitter = require('events');

class MsgEventEmitter extends EventEmitter {};

MsgEventEmitter.on('full',()=>{
    console.log('This is fire form event');
})
// MsgEventEmitter.emit('full');
console.log('code id running..');
// http module

// const http = require('http');
// const port = process.env.PORT || 3000; 
// const server = http.createServer((req,res)=>{
//     req.statusCode = 200;
//     res.setHeader('Contant-Type','text/html');
//     if (req.url == '/') {
//         res.end(' <h1> Index Page</h1>');
//     } else if  (req.url == '/about'){
//         res.end(' <h1> hey this is about page</h1>');
//     }
//      else {
//         req.statusCode = 404;
//         res.end(' <h1> 404 Page not found</h1>');
//     }
// });

// server.listen(port,()=>{
//     console.log('server is running on '+port);
// });


// using express famework
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/about',(req,res) => {
//     res.send('This is About Page');
// })
