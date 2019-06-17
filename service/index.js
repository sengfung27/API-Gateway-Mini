var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello from Service")
})

app.get('/hello', (req, res) => {
    res.send("Hello, World!")
})


console.log("Services run on localhost:3001")

app.listen(3001);