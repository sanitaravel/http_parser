import net from 'net';

/**
 * Creates and starts a TCP client with callback support for custom handling.
 *
 * @param {string} host - The server hostname or IP address.
 * @param {number} port - The server port.
 * @param {Object} callbacks - Callback functions for handling events.
 * @param {Function} [callbacks.onConnect] - Called when the connection is established.
 * @param {Function} [callbacks.onData] - Called when data is received from the server.
 * @param {Function} [callbacks.onEnd] - Called when the connection is closed by the server.
 * @param {Function} [callbacks.onError] - Called when an error occurs.
 * @returns {net.Socket} - The TCP client instance.
 */
export function createTcpClient(host, port, callbacks = {}) {
    const client = new net.Socket();

    client.connect(port, host, () => {
        if (callbacks.onConnect) {
            callbacks.onConnect();
        } else {
            console.log(`Connected to server: ${host}:${port}`);
        }
    });

    client.on('data', (data) => {
        if (callbacks.onData) {
            callbacks.onData(data);
        }
    });

    client.on('end', () => {
        if (callbacks.onEnd) {
            callbacks.onEnd();
        } else {
            console.log('Connection ended by server.');
        }
    });

    client.on('error', (err) => {
        if (callbacks.onError) {
            callbacks.onError(err);
        } else {
            console.error(`TCP Client Error: ${err.message}`);
        }
    });

    return client;
}
