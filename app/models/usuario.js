var mongoose = require('mongoose');

var schema = mongoose.Schema({
	name : {
		type: String,
		required: true
	},
	sobrenome : {
		type: String,
	},
	url: {
		type: String
	},
	phone: {
		type: String,
		required: true
	},
	data_nascimento: {
		type: String
	},
	cpf: {
		type: String
	},
	rg: {
		type: String
	},
	endereco: {
		type: String
	},
	cep: {
		type: String
	},


});

mongoose.model('Usuario', schema);