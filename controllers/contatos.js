module.exports = function(app) {
		var ContatoController = {
				index: function(req, res) {
				var usuario = req.session.usuario;
				var params = {usuario:usuario};
				res.render('views/contatos', params);
				},
				cadastro: function (req,res){            
                
                   res.render('views/contatos/cadastro');

				},
				salvar: function (req,res){            
                
				 res.render('views/contatos');
                  // res.render('views/contatos/');

				}

		}
return ContatoController;
};


