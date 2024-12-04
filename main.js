import {sendHttpRequest} from './httpClient.js';

// Example usage: Connecting to 192.168.178.20 on port 8080
const host = '192.168.178.20'; // Replace with the target server's host
const port = 8080; // Replace with the target server's port


sendHttpRequest({host: host, port: port}, (err, response1) => {
    if (err) {
        console.error('Error in first request:', err.message);
        return;
    }

    console.log('First Request Response:', response1);
});