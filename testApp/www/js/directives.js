/**
 * Created by Oak on 07/02/2016.
 */
angular.module('starter')
.directive('userPainel', function(){
   var ddo = {};

    ddo.restrict = "E";

    ddo.scope ={
        _id: '@',
        name: '@',
        phone: '@',
        sobrenome: '@',
        data_nascimento: '@',
        cpf: '@',
        rg: '@',
        endereco: '@',
        cep: '@',
        url: '@'
    };

    ddo.templateUrl = "../templates/user-painel.html"

    return ddo;
});