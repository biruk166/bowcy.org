const mysql = require('mysql');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

app.listen(3001, ()=>
{
    console.log(`server is running at port 3000`);
})

//connects to mysql database
var con = mysql.createConnection(
{
    host: "localhost",
    user: "root",
    password: "mF5YLFTe!6V8ruE",
    database: "bowcydatabase"
});

//shows connection status 
// connects to the database
con.connect(function(err)
{
    if (err) throw err;
});


// post the article into the database
app.post('/publishArticle', (req, res)=>{
    const data = req.body.data;
    console.log(data.engArticle);
    res.send('Data recieved');
    con.query(`INSERT INTO bowcyarticle (publisherEmail, publisherName, publishedDate, articleImageDirectory, 
                                        articleTitle, article) VALUES(?, ?, ?, ?, ?, ? )`,
                                          [data.publisherEmail, data.publisherName, data.publishedDate,
                                           data.articleImgDirectory, data.articleTitle, data.article],
                                           (err, resp)=>{
                                               if(err){
                                                   console.log(err.message);
                                                   console.log('data not added');
                                               }
                                               else{
                                                   console.log('data added');
                                                   console.log(resp);
                                               }
                                           })
})

// fetches all the article from the database and sends it
app.post('/getAllArticle', (req, res)=>{
    var data = con.query(`SELECT * FROM bowcyarticle`);
    console.log(req.body.data);
    console.log(data);
    res.send('recived');
})


// to add newsletter subscribers to the data base
app.post('/createNewsLetter', (req, res)=>
{
    const email = req.body.email;
    const sqlResult = con.query(`SELECT subscriberEmail FROM newslettersubscribers WHERE subscriberEmail=?`,[email]);
    if(sqlResult.values[0] != null)
    {
        console.log(sqlResult.values);
        con.query("INSERT INTO newslettersubscribers (subscriberEmail) VALUES(?)", [email],(err, resp)=>
        {
            console.log("data inserted to DB");
            res.send("Sucesss");
        })
    }
    else
    {
        console.log("added");
        console.log(sqlResult);
    }
})



//con.query(`INSERT INTO newslettersubscribers (subscriberId, subscriberEmail) VALUES(${id}, 'biruk1@ksu.edu')`);



