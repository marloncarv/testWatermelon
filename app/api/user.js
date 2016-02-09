var mongoose = require('mongoose');

var api = {};

// var counter = 2;

// var users = [{
//   _id: 1,
//   name:'Goku',
//   phone:'(11)9475-96589',
//   sobrenome: "Kakaroto",
//   data_nascimento: "Desconhecida",
//   cpf: "999.999.999-99",
//   rg: "99999999999-9",
//   endereco: "Av. Akira Toryama, 99",
//   cep: "00000-000",
//   url: 'http://vignette3.wikia.nocookie.net/dragonball/images/a/a7/Goku_Super_Saiyan_Vs_Meta_Cooler.JPG/revision/latest?cb=20120909045043',
// },{
//   _id: 2,
//   name:'Vegeta',
//   phone:'(11)9475-96589',
//   sobrenome: "Príncipe",
//   data_nascimento: "Desconhecida",
//   cpf: "999.999.999-99",
//   rg: "99999999999-9",
//   endereco: "Av. Akira Toryama, 99",
//   cep: "00000-000",
//   url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ac/Vegeta.jpg/250px-Vegeta.jpg',
// }];
var model = mongoose.model('Usuario');

api.lista = function(req, res){
  model
    .find({})
    .then(function(users){
      res.json(users);
    }, function(erro){
      console.log(erro);
      res.sendStatus(500).json(erro);
    })
   
}

api.buscaUser = function(req, res){
  model
    .findById(req.params.id)
    .then(function(user){
      if(!user) throw Error('Usuário não encontrado');
      res.header('Access-Control-Allow-Origin', '*');
      res.json(user);
    }, function(error){
      console.log(error);
      res.status(404).json(error);
    })
}

api.addUser = function(req, res){
  var user = req.body;
  model
    .create(user)
    .then(function(user){
      res.json(user)
    }, function(error){
      console.log(error);
      res.status(500).json(error);
    })

  // var user = req.body;
  // user._id = ++counter;
  // users.push(user);

  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', '*')

  // res.json(user);
}

module.exports = api;