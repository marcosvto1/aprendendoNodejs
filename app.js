var express = require('express');
var app = express();
var load = require('express-load');
var error = require('./middleware/error');
var bodyParser = require('body-parser'); 
var session = require('express-session')
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);



// view engine setup
app.set('views', __dirname, '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));
app.use(session());
app.use(bodyParser());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(express.static( __dirname, '/public'));


// ...stack de configruções do servidor


load('models')
    .then('controllers')
    .then('routes')
    .into(app);



app.use(function(req, res, next) {
  res.status(404);
  res.render('./views/not-found');
});

app.use(function(error, req, res, next) 
{
  res.status(500);
  res.render('./views/server-error', {error: error});
});


/*io.sockets.on('connection', function (client) {
	client.on('send-server', function (data) {
		var msg = "<b>"+data.nome+":</b> "+data.msg+"<br>";
			client.emit('send-client', msg);
			client.broadcast.emit('send-client', msg);
	});
});*/

io.sockets.on('connection',function(socket){
  var userid = socket.id;

  socket.emit('welcome');

  socket.broadcast.emit('user in',{userid:userid});


});
app.listen(3000,function(){

  console.log("Ntalk no ar");
});

module.exports = app;