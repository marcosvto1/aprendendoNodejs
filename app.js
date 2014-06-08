var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser'); 
var session = require('express-session')
var cookieParser = require('cookie-parser');
var app = express();

//var routes = require('./routes/home');



// view engine setup
app.set('views', __dirname, '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));
app.use(session());
app.use(bodyParser());

//app.use(app.router);
app.use(express.static( __dirname, '/public'));

//app.get('/', routes.index);
//app.get('/usuario', routes.users.index);
// ...stack de configruções do servidor
load('models')
    .then('controllers')
    .then('routes')
    .into(app);


app.listen(3000,function(){

  console.log("Ntalk no ar");
});

module.exports = app;