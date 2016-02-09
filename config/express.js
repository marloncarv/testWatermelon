var express =  require('express');

var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

//app.use(bodyParser.json())
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

consign({cwd: 'app'})
    .include('models')
    .then('api')
    .then('routes')
    .into(app);


module.exports = app;