module.exports = function(app){

    var api = app.api.user;

    app.route('/users')
        .get(api.lista)
        .post(api.addUser);

    app.get('/users/:id', api.buscaUser);
}