const express = require('express');
const fs = require('fs');
const mysql = require('mysql');

const app = express();
app.listen(3001, ()=>{
    console.log("running on port 3001");
})


//connects to mysql database
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mF5YLFTe!6V8ruE"
  });


//shows connection status
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// con.query(`select * from bowcydatabase.newsarticledb`, (err, res) =>{
//      console.log(res);
//  });

//reads a file from .txt file and returns the result to the user
let path = 'server/DataStorage/NewsArticleStorage/strongwomen.txt';
fs.readFile(path, 'utf8', (err, data) => {
     if(err) throw err;
     app.get('/', (req, res)=>{
        res.send("<p>" + data +"</p>");
    })
     //console.log("this is my Data " + data);
});
