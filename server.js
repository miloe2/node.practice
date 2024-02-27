const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
let db;
require('dotenv').config();

const url = process.env.MONGO_URI;

new MongoClient(url).connect().then((client) => {
    console.log('db connected');
    db = client.db('forum');
    app.listen(8080, ()=>{
        console.log('http://localhost:8080')
    })
}).catch((err) => {
    console.log(err)
})


app.get('/', (res, req)=>{
    req.send('hihih')
})