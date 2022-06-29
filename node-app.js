// url module
const http = require('http');
const url = require('url');
const fs = require('fs');
const uc = require('upper-case');
const events = require('events');
const formidable = require('formidable');
const nodemailer = require('nodemailer');
const mysql = require('mysql');
http.createServer(function (httpRequest,Httpresponse) {
    const endResponse = new events.EventEmitter();
    // this is EventEmitter from events
    /**
     * making HTTP end Response 
     */
    endResponse.on('sendHttpResponse',()=>{
        console.log('event is fire');
        Httpresponse.end();
    })
    console.log('httpRequest.url : is',httpRequest.url );
    Httpresponse.writeHead(200,{'Contant-Type':'text/html'});
    let appUrl = url.parse(httpRequest.url,true).pathname;
    console.log(appUrl);
    if(appUrl == '/upper-case'){
        Httpresponse.write(uc.upperCase('hello world'));
        endResponse.emit('sendHttpResponse');
    }
    else if (appUrl == '/fire-event') {
        // this is fs module fs.createReadStream
        const myFile =  fs.createReadStream('./images.json');
        myFile.on('open',()=>{
            console.log('file is open');
            Httpresponse.write('file is open');
            endResponse.emit('sendHttpResponse');
        });
    }
    // uploading
    else if (httpRequest.url == '/upload-file' && httpRequest.method == 'POST'){
        const uploadFiles = new formidable.IncomingForm();
        uploadFiles.parse(httpRequest,function (error,paths,files) {
            if (error) throw error ;
            const tempFolder = files.file.filepath;
            const uploadedPath = files.file.originalFilename;
            fs.rename(tempFolder,'C:/Users/'+uploadedPath,function (errorRmv) {
                if (errorRmv) throw errorRmv ;
                Httpresponse.write('file Has been uploaded sussesfuly');
                endResponse.emit('sendHttpResponse');
            })
        })
        
    }
    // mail send
    else if (httpRequest.url == '/send-mail' && httpRequest.method == 'POST') {
        console.log('http request',httpRequest.on('data', chunk => {
            console.log(`Data chunk available: ${chunk}`);
          }));
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'souravmaity091@gmail.com',
                pass: 'skill@0Rs'
              }
        }).sendMail({
            from:'souravmaity091@gmail.com',
            to:'somamaity30@gmail.com',
            subject:'test',
            text:'testing'
        },(errorMail,info) => {
            if (errorMail) throw errorMail;
            console.log(errorMail.response);
            Httpresponse.write('send mail');
            endResponse.emit('sendHttpResponse');
        });
    }
    // create mysql connection
    else if(httpRequest.url == '/create-mysql-connection'){
        console.log('creating mysql connection');
        const conn = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:''
        });

        conn.connect(function (errorMySqlConn) {
            if (errorMySqlConn) {
                throw errorMySqlConn;
                Httpresponse.write('coonection failed mysql');
            }
            const connMsg = 'created mysql connection succesfully';
            Httpresponse.write(connMsg);
            console.log(connMsg);
            endResponse.emit('sendHttpResponse');
        })

    }
    // creating data base
    else if (httpRequest.url == '/create-database') {
        const conn = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'test'
        });

        conn.connect((errorMySqlConn) => {
            if (errorMySqlConn) throw errorMySqlConn;
            const mysqlQuery = 'CREATE TABLE `test`.`forms_ep` ( `id` INT NOT NULL AUTO_INCREMENT ,  `name` VARCHAR(10) NOT NULL ,  `email` VARCHAR(30) NOT NULL ,  `phone` INT NOT NULL ,    PRIMARY KEY  (`id`)) ENGINE = InnoDB;';
            conn.query(mysqlQuery,function (mySqlQueryError,fields,result) {
                if (mySqlQueryError) {
                    // throw mySqlQueryError;
                    Httpresponse.write("sql failed!"+mySqlQueryError.sqlMessage);
                    endResponse.emit('sendHttpResponse');
                } else {
                    Httpresponse.write("sql successfully runned");
                    endResponse.emit('sendHttpResponse');
                }
            })
        });

    }
	// insert into tabe
	else if(httpRequest.url = 'insert-table-values'){
		const conn = mysql.createConnection({
			host:'localhost',
			user:'root',
			password:'',
			database:'test'
		});
		
		conn.connect((errorMySqlConn) => {
			if (errorMySqlConn){
				Httpresponse.write('conn failed');
				endResponse.emit('sendHttpResponse');
			} else {
				var values = [
				'test','1','inserting'
				]
				conn.query('INSERT INTO users VALUES ?',[values],(mySqlQueryError,fields,result) => {
					if (mySqlQueryError) {
						Httpresponse.write('sql failed'+mySqlQueryError.sqlMessage);
						endResponse.emit('sendHttpResponse');
					} else {
						Httpresponse.write('insert succesfully last insert id is'+result.insertId+' affexted'+result.affectedRow);
						endResponse.emit('sendHttpResponse');
					}
				})
			}
		})
	}
    else {
        appUrl="."+appUrl;
        console.log("file "+appUrl);
        fs.readFile(appUrl,(error,responseTempate)=>{
            if (error) {
                Httpresponse.writeHead(404,{'Contant-Type':'text/html'});
                Httpresponse.write("File Not Found");
                endResponse.emit('sendHttpResponse');
            } else {
                Httpresponse.write(responseTempate);
                endResponse.emit('sendHttpResponse');
            }
        });
    }
    
}).listen(8005,()=>{
    // testing ... 
    console.log('Server is Running');
});

