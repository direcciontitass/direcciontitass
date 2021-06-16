// Include Nodejs' net module.
const Net = require('net');
// The port on which the server is listening.
const port = 23000;

// Use net.createServer() in your code. This is just for illustration purpose.
// Create a new TCP server.
const server = new Net.Server();
// The server listens to a socket for a client to make a connection request.
// Think of a socket as an end point.
server.listen(port, function() {
    console.log(`SERVIDOR TCP #1 - ESCUCHANDO: ${port}`);
});

// When a client requests a connection with the server, the server creates a new
// socket dedicated to that client.
server.on('connection', function(socket) {
    //console.log('SERVIDOR TCP #1 - NUEVA CONEXIÓN');

    // Now that a TCP connection has been established, the server can send data to
    // the client by writing to its socket.
    //socket.write('Hello, client.');

    // The server can also receive data from the client by reading from its socket.
    socket.on('data', function(chunk) {
        console.log(`SERVIDOR TCP #1 - MENSAJE: ${chunk.toString()}`);
    });

    // When the client requests to end the TCP connection with the server, the server
    // ends the connection.
    socket.on('end', function() {
        //console.log('SERVIDOR TCP #1 - CONEXIÓN CERRADA');
    });

    // Don't forget to catch error, for your own sake.
    socket.on('error', function(err) {
        console.log(`SERVIDOR TCP #1 - ERROR: ${err}`);
    });
});