import {createTcpClient} from './tcpClient.js';
import {parseHttpResponse} from './httpParser.js';

/**
 * Sends an HTTP request and processes the response using callbacks.
 *
 * @param {Object} options - Configuration for the HTTP request.
 * @param {string} options.host - The server hostname or IP address.
 * @param {number} options.port - The server port.
 * @param {string} [options.path='/'] - The request path (e.g., `/api/resource`).
 * @param {string} [options.method='GET'] - The HTTP method (e.g., `GET`, `POST`).
 * @param {string} [options.body=''] - The HTTP request body (for POST/PUT methods).
 * @param {Object} [options.headers={}] - Additional HTTP headers.
 * @param {Function} callback - Function called with the parsed response or an error.
 */
export function sendHttpRequest({host, port, path = '/', method = 'GET', body = '', headers = {}}, callback) {
    let responseData = '';

    const client = createTcpClient(host, port, {
        onConnect: () => {
            console.log(`\x1b[32mConnected to server: ${host}:${port}\x1b[0m`);

            // Default headers
            const defaultHeaders = {
                Host: host,
                'Content-Length': Buffer.byteLength(body),
                Connection: 'close',
            };

            // Merge default and custom headers
            const allHeaders = {...defaultHeaders, ...headers};

            // Construct the HTTP request
            const headerString = Object.entries(allHeaders)
                .map(([key, value]) => `${key}: ${value}`)
                .join('\r\n');
            const httpRequest = `${method} ${path} HTTP/1.1\r\n${headerString}\r\n\r\n${body}`;

            // Send the request
            client.write(httpRequest);
        },
        onData: (data) => {
            responseData += data.toString();
        },
        onEnd: () => {
            console.log('\x1b[34mResponse received. Processing...\x1b[0m`');
            try {
                const parsedResponse = parseHttpResponse(responseData);
                if (callback) callback(null, parsedResponse); // Check if callback is defined
            } catch (error) {
                if (callback) callback(new Error(`Error processing response: ${error.message}`));
            }

            client.destroy(); // Close the client connection
        },
        onError: (err) => {
            if (callback) callback(new Error(`TCP Client Error: ${err.message}`));
        },
    });
}