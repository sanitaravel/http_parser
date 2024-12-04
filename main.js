import { sendHttpGetRequest } from './httpClient.js';

// Example usage: Connecting to 192.168.178.20 on port 3000
const host = '192.168.178.20'; // Replace with the target server's host
const port = 3000; // Replace with the target server's port

sendHttpGetRequest(host, port);
