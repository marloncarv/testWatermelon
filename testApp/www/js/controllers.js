angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('Users', function($scope, $http, $stateParams, $state) {

    $scope.users = {};

    $state.go($state.current, {}, {reload: true});

    if ($stateParams.userId){
        $http.get('http://localhost:3000/users/'+$stateParams.userId)
        .success(function(data){
            $scope.users = data;
            console.log(data);
        })
        .error(function(erro){
            console.log(erro);
        })
    }else{

        $http.get('/users')
            .success(function(data){
              $scope.users = data;
            })
            .error(function(erro){
                console.log(erro);
            })
    }



})

.controller('CadastroCtrl', function($scope, $http) {
        $scope.user = {};

        $scope.mensagem = '';

        $scope.$watch('cadastro.$valid', function(valid){
          $scope.formValid = valid
        });

        $scope.submeter = function(){
        var urlFoto = $scope.user.url.base64;
        $scope.user.url = 'data:image/jpg;base64,'+urlFoto;
        $http.post('/users', $scope.user)
        .success(function(){
          $scope.mensagem = 'UsuÃ¡rio cadastrado com sucesso!';
          $scope.user = {};
        })
        .error(function(erro){
            $scope.mensagem = 'Não foi possível cadastrar';
            console.log(erro);
        })


        };

        $scope.voltar = function(){
            window.location.href = '/#/app/cadastro.html';
        }
});
