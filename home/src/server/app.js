const express = require('express');
const app = express();
const http = require('http');
const os = require('os');
const { MongoClient } = require('mongodb')
const mongoURL = 'mongodb+srv://TaylorTayTyT:rc6vPfesVfSdY9X9@chatbat.wzcwj.mongodb.net/test'
const client = new MongoClient(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
try {
    client.connect()
} catch (e) {
    console.log(e)
} finally {
    console.log("mongodb has done something")
}

var cors = require('cors');

// use it before all route definitions
app.use(cors());

http.createServer();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.post('/', (req, res) => {
    console.log(req.params.name);
    res.send(req)
})

app.post('/personalityTest', (req, res) => {
    res.send('FLABBERGAS')
    console.log('1')
})

app.get('/personalityTest', (req, res) => {
    res.redirect('http://localhost:3000/personalityTest')
    console.log('2')
})

app.listen(3001, () => {
    console.log("listening at port 3001")
})