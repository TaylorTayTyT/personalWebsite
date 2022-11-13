const express = require('express')
const http = require('http')
const app = express()
const path = require("path")
const { config } = require('process')

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs")
app.set('port', process.env.PORT || 3001);

app.on("connect", () => {
    console.log("connected")
})

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(3001, () => console.log("listening on port 3001"))