import {sendHttpRequest} from './httpClient.js';

// Example usage: Connecting to 192.168.178.20 on port 8080
const host = '192.168.178.20'; // Replace with the target server's host
const port = 8080; // Replace with the target server's port
const myResponse = 'name: "Alexander Koshcheev"'


// First request: GET request to the root path
sendHttpRequest({host: host, port: port}, (err, response1) => {
    if (err) {
        console.error('Error in first request:', err.message);
        return;
    }

    console.log('First Request Response:', response1);


    // console.log({host: host,
    //     port: port,
    //     path: response1.headers['Location'],
    //     method: 'POST',
    //     headers: {
    //         Host: host,
    //         'Content-Type': response1.headers['Content-Type'],
    //         'Content-Length': Buffer.byteLength(myResponse),
    //         Connection: 'close',
    //     },
    //     body: JSON.stringify(myResponse),})

    // Second request: POST request with a custom body
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
            console.error('Error in second request:', err.message);
            return;
        }

        console.log('Second Request Response:', response2);

        // Reuse values from the first response (e.g., headers or body)
        console.log('Reused Header from First Response:', response1.headers['Content-Type']);
    });
});