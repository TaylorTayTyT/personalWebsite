const express = require('express')
const http = require('http')
const app = express()


app.get("/", (req, res) => {
    res.send("sup")
})

app.listen(3001, () => console.log("listening on port 3001"))