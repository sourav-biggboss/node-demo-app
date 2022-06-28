# node-demo-app

This is my first app in node , 
- playground

# upload file using node

You have to use formidable

## install using npm:
npm install formidable

-- code--
const formidable = require('formidable');

### create new estanse from formidable from method IncomingForm()
### IncomingForm has parse method which contanes a call back function ,require params are error,fields,files
### parse is call when any file get uploading
### file upload temp dir : filepath
### file name of uploads propety is originalFilename;
--- code--
incomingForm = formidable.IncomingForm();
// call when upload
incomingForm.parse(Httprequest,function (error,fields,files){
 if (error) throw error 
 const tempDir = files.filename.filepath;
 const FileUploadedPath = './'+file.filename.originalFileName;
moving file temp to disk
 fs.rename(tempDir,FileUploadedPath(err) => {
     if (err) throw err
     console.log('file is uploaded sussefully'); 
 })
})
--- html--

<form method="post" action='/' enctype="multipart/form-data">>

<input name="filename" type="file" />
<button type="submit" name="submit">

</form>

# Send Mail 
## npm install nodemailer
for sending mail module require nodemailer
call createTrasport method form nodemailer ,  which has params of object type :-
<!-- {
    service : 'gmail',
    auth : {
        user: 'yourmail@gmail.com',
        pass : 'yourpassword'
    }
} -->

then call sendMail method from nodemailer , which has first params of an object 
<!-- {
    from:'yourmail@gmail.com'
    to:'sendermail@gmail.cpm',
    subject:'subject',
    text:'body'
} -->

and second param is a call back function has error , and info

## ----code---

const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user: 'dummy@gmail.com'
        pass: 'xzy'
    }
});

const configMail = {
    from:'dummy@gmail.com'
    to:'sendermail@gamil.com'
    subject:'subject'
    text:'dummy text'
}

const sendMail = transport.sendMail(configMail,function (error,info){
    if(error) throw error

    console.log(info.reposonse);
});

## mysql
for connecting mysql model require mysql driver
so, insatll mysql module download from
npm install mysql
use,
--- code --
const mysql  = require('mysql');
### create mysql connect 
first create a connection for that 
--- code --
const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "tete"
});

Then connect it,
--- code ---
conn.connect((error) => {
    if(error) thow error

    console.log('DB conneted successfully');
});

## create database 
for that use conn.query
 - in query method the first param is my sql query
 - seconde param is value to have ?? 
 - thierd param is a call back function 
    - call function have first param is error
    - second param is fields
    - third param is result

--- code ---

conn.connect((error) => {
    if (error) throw error
    conn.query('',(errorQuery,fields,result) => {
        if(!errorQuery){
            console.log('Query has been runned affected rows are'+result.affectedRow);
        }
    });
});