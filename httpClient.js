import { createTcpClient } from './tcpClient.js';
import { parseHttpResponse } from './httpParser.js';
import { logHttpResponse } from './httpLogger.js';

/**
 * Sends an HTTP GET request and processes the response.
 *
 * @param {string} host - The server hostname or IP address.
 * @param {number} port - The server port.
 */
export function sendHttpGetRequest(host, port) {
    let responseData = '';

    const client = createTcpClient(host, port, {
        onConnect: () => {
            console.log(`Connected to server: ${host}:${port}`);
            const httpRequest = `GET / HTTP/1.1\r\nHost: ${host}\r\nConnection: close\r\n\r\n`;
            client.write(httpRequest);
        },
        onData: (data) => {
            responseData += data.toString();
        },
        onEnd: () => {
            console.log('Response received. Processing...');

            try {
                const parsedResponse = parseHttpResponse(responseData);
                logHttpResponse(parsedResponse);
            } catch (error) {
                console.error(`Error processing response: ${error.message}`);
            }

            client.destroy(); // Close the client connection
        },
        onError: (err) => {
            console.error(`Error: ${err.message}`);
        },
    });
}
