const express = require('express');
const app = express();
const http = require('http');
const os = require('os');

http.createServer();

app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.post('/', (req, res) => {
    console.log("heyo")
    console.log(req.params)
    res.render('home.ejs')
})

app.listen(3001, () => {
    console.log("listening at port 3001")
})