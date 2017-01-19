/**
 * Created by i309184 on 19/01/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');

var PORT = 3000;

var app = express();
var monitorings = [];

app.use(bodyParser.json());

app.post('/', function (req, res) {
    monitorings.push(req.body);
    res.send();
});
app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(monitorings));
});

app.listen(PORT, function () {
    console.log('Example app listening on port ', PORT);
});