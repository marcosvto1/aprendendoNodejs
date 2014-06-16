module.exports = function(app) {
	var HomeController = {
		index: function(req, res) {
		res.render('views/home/index');
	  },
	    login: function(req, res){
            var nome =req.body.usuario.nome,
            senha = req.body.usuario.senha;
            if(nome && senha){
               var usuario = req.body.usuario;
               usuario['contatos'] = [];
               req.session.usuario = usuario;
               res.redirect('/contatos');
            }else{
                res.redirect('/');
            }

	    },
	    logout: function(req,res){
              req.session.destroy();
              res.redirect('/');
	     },
      teste: function(req,res){

       //  res.redirect('views/home/teste');
         res.render('views/home/teste');
      },
      criar: function(req,res){

       //  res.redirect('views/home/teste');
         res.render('views/contatos/cadastro');
      }

	};
return HomeController;
};
