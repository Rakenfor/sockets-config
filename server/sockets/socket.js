const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);


        //Brodcast sirve para enviar para todos
        client.broadcast.emit('enviarMensaje', data);

        // if (data.user) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!'
        //     });
        // }

    });


    //Enviar mensaje al cliente
    client.emit('enviarMensaje', {
        user: 'admin',
        data: 'Bienbenido a esta app'
    });

});