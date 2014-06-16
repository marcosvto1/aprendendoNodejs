var socket = io.connect('http://localhost:3000/chat');

socket.on('welcome',function(){

   $('#updates').append('<l1> Bem vindo vc entrou no chat </l1>');

});