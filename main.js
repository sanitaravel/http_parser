import {sendHttpRequest} from './httpClient.js';
import {logHttpResponse} from "./httpLogger.js";

/**
 * Example usage: Connecting to 192.168.178.20 on port 8080
 * @constant {string} host - The target server's host
 * @constant {number} port - The target server's port
 * @constant {string} myResponse - The custom body for the second request
 */
const host = 'localhost'; // Replace with the target server's host
const port = 8080; // Replace with the target server's port
const myResponse = "name: alexkoshcheev10"

// First request: GET request to the root path
sendHttpRequest({host: host, port: port}, (err, response1) => {
    if (err) {
        console.error(`\x1b[31mError in first request: ${err.message}\x1b[0m`);
        return;
    }

    logHttpResponse(response1, 'First request');

    // Reuse values from the first response (e.g., headers or body)
    console.log(`\x1b[36mReused Header from First Response: ${response1.headers['Location']}, ${response1.headers['Content-Type']}\x1b[0m`);

    // Second request: POST request with a custom body
    if (response1.headers['Location']) {
        sendHttpRequest({
            host: host,
            port: port,
            path: response1.headers['Location'],
            method: 'POST',
            headers: {
                'Content-Type': response1.headers['Content-Type'],
            },
            body: myResponse,
        }, (err, response2) => {
            if (err) {
                console.error(`\x1b[31mError in second request: ${err.message}\x1b[0m`);
                return;
            }

            logHttpResponse(response2, 'Second request');
        });
    } else {
        console.error('\x1b[36mLocation header not found in the first response.\x1b[0m');
    }
});