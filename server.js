const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
require('dotenv').config(); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const url = process.env.MONGO_URI;
let db;


new MongoClient(url).connect().then((client) => {
    console.log('db connected');
    db = client.db('forum');
    app.listen(8080, ()=>{
        console.log('http://localhost:8080')
    })
}).catch((err) => {
    console.log(err)
})



app.get('/news', ()=>{
    db.collection('post').insertOne({title : 'DJwj'})
})

app.post('/add', async (res, req) => {
   await db.collection('post').insertOne({title : res.body.title, content : res.body.content})
})