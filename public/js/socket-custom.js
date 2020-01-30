var socket = io();
/* Escuchar información */
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

/* Enviar información */
socket.emit('enviarMensaje', {
    usuario: 'Emmanuel',
    mensaje: 'Hola mundo'
}, function ( resp ) {
    console.log('Respuesta server ', resp);
});