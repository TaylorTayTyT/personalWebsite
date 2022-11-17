const express = require('express');
const app = express();
const http = require('http')

http.createServer();

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.listen(3001, () => {
    console.log("listening at port 3001")
})