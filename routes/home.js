module.exports = function(app) {
	var autenticar = require('../middleware/autenticador');

     var home = app.controllers.home;
	app.get('/', home.index);
	app.post('/entrar', home.login);
	app.get('/sair', home.logout);
};
