module.exports = function(app) {
		var ContatoController = {
				index: function(req, res) {
				var usuario = req.session.usuario;
				var params = {usuario:usuario};
				res.render('views/contatos', params);
				}
		}
return ContatoController;
};


