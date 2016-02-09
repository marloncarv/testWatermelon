var http = require('http');

var app = require('./config/express');
var db = require('./config/database')('localhost/cadastro');

http.createServer(app).listen(3000, function(){
    console.log('Servidor iniciado na porta 3000')
});