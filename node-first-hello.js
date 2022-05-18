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
<<<<<<< HEAD
// // read file with synce
// const data = fs.readFileSync('images.json');
// console.log('this is in the file - with sync',data.toString());


// //  write file with async
 
// fs.writeFile('images.json','Hello world this is data',() => {
// 	console.log('write done');
// })
// // file write with sync 
// const fileStatus = fs.writeFileSync('images.json','hello this is data after writting the next line will run')
// console.log('code running',fileStatus);


// comman js import 
//const todayNews = require('./es6-module');
import {todayNews} form './es6-module';
// es6 imports
// call function form another folder 
todayNews();
=======

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
//es6 import alies 

// import {animeList as listAnime } from './module-type.js'

// console.log('this is es6 import as alies listAnime',listAnime());

// es6 import default

// import myAnimeList from './module-type.js';
// console.log('is is default function ',myAnimeList());

// es6 module all
import * as anime from './module-type.js';

console.log('This is class of all module-type es6  ',anime);
console.log('the default function is ',anime.default());
console.log('other function is animeList',anime.animeList());
>>>>>>> 4b4b5f990e1d655f5ff2cc0a8ebdc1c32ef1421f
