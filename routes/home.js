module.exports = function(app) {
	

     var home = app.controllers.home;
     
	app.get('/', home.index);
	app.post('/entrar', home.login);
	app.get('/sair', home.logout);
	app.get('/teste', home.teste);
	app.get('/criar', home.criar);


};
