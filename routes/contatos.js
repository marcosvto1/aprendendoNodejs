module.exports = function(app){

   var contatos = app.controllers.contatos;
   app.get('/contatos' , contatos.index);
   app.get('/cadastro' , contatos.cadastro);
   app.post('/salvar' , contatos.salvar);

};