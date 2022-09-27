const mysql = require('mysql');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

app.listen(3001, ()=>
{
    console.log(`server is running at`);
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
con.connect(function(err)
{
    if (err) throw err;
    console.log("Connected!");
});

app.get('/', (req, res)=>
{
     res.send("<h1> still running <h1>");
})

app.post('/publishArticle', (req, res)=>{
    const data = req.body.data;
    console.log(data.engArticle);
    res.send('Data recived');
    con.query(`INSERT INTO newsarticledb (EnglishAvailable, EnglishTitle, EnglishArticle, 
                                          AmharicAvailable, AmharicTitle, AmharicArticle, 
                                          PublisherEmail, ArticleImage, DeleteStatus, HideStatus,
                                          PublishedDate, PublisherNameEnglish, 
                                          PublisherNameAmharic) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                                          [data.engAvailabe, data.engTitle, data.engArticle,
                                           data.amhAvailable, data.amhTitle, data.amhArticle, 
                                           data.pubEmail, data.articleImgDirectory, data.delStatus,
                                           data.hidStatus, data.pubDate, data.pubEnglishName,
                                           data.pubAmharicName],(err, resp)=>{
                                               if(err){
                                                   console.log(err.message);
                                                   console.log('data not added');
                                               }
                                               else{
                                                   console.log('data added');
                                                   console.log(resp);
                                               }
                                           }
    )
})


app.post('/createNewsLetter', (req, res)=>
{
    const email = req.body.email;
    const isactive = 0;
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


//sends the donation form
app.post('/getDonationForm', (req, res)=>{
    res.send('<NewsSection />');
})
//con.query(`INSERT INTO newslettersubscribers (subscriberId, subscriberEmail) VALUES(${id}, 'biruk1@ksu.edu')`);