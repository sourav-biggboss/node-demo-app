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
const fs = require('fs');
// read file with out sync
fs.readFile('./images.json','utf8',function (error,data) {
	if(error === null){
		console.log(data);
	} else {
		console.log(error);
	}
});

console.log('code running');  
// read file with synce
const data = fs.readFileSync('images.json');
console.log('this is in the file - with sync',data.toString());