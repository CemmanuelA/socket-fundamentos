const { io } = require('../server')
io.on('connection', ( client ) => {
    console.log("Usuario conectado");
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje',( data, callback ) => {
        console.log(data);

        // emitir a todos los usuarios conectados
        client.broadcast.emit('enviarMensaje', data);

    });
})