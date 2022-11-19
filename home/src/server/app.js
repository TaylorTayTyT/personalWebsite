const express = require('express');
const app = express();
const http = require('http');
const os = require('os');

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

app.listen(3001, () => {
    console.log("listening at port 3001")
})