const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs')
const os = require('os')
const { MongoClient } = require('mongodb')
const mongoURL = 'mongodb+srv://TaylorTayTyT:njXW0GEfEifT88Ra@chatbat.wzcwj.mongodb.net/test'
const client = new MongoClient(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
//const questions = require('./questions.txt');

try {
    client.connect()
} catch (e) {
    console.log(e)
} finally {
    console.log("mongodb has done something")
}


const text = fs.readFileSync(__dirname + '\\questions.txt', 'utf8');
console.log(text[1]);

const Profile = require('./Profile');

var cors = require('cors');

// use it before all route definitions
app.use(cors());

http.createServer();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/personalityTest/send', (req, res) => {
    //res.send(questions)
})

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.post('/', (req, res) => {
    console.log(req.params.name);
    res.send(req)
})

app.post('/personalityTest', (req, res) => {
    res.send('FLABBERGAS')
    console.log(req.title)
})

app.get('/personalityTest', (req, res) => {
    res.redirect('http://localhost:3000/personalityTest')
})

app.get('/testingMongoDB', (req, res) => {
    res.send('heyo')
})

app.listen(3001, () => {
    console.log("listening at port 3001")
})