let socket = io();

//Escuchar 
socket.on('connect', function() {

    console.log('Conectado al servidor');

});

//escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//Eviar información
socket.emit('enviarMensaje', {
    user: 'Robert',
    message: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

//Escuchar información
socket.on('enviarMensaje', function(message) {
    console.log(message);
})