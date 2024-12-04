# TCP HTTP Client Project - Task 11

This branch contains the implementation for Task 11, which involves writing a Node.js script that connects to a server, sends an HTTP GET request to retrieve a path, and then sends a POST request to that path with custom headers and body. The script uses the `net` module to establish a connection to the server and handle HTTP requests and responses.

## Task 11 Requirements

1. **Connect to a server**: The script connects to a server running on a given IP address and port.
2. **Send an HTTP GET request**: A valid HTTP GET request is sent to the server for the root path (`/`) or a specific path obtained from the previous assignment.
3. **Send a POST request**: After retrieving the path:
   - A POST request is sent to the retrieved path.
   - The headers `Host`, `Location`, `Content-Type`, and `Content-Length` are included.
   - The request body contains the message `name: <your name>`.
4. **Process the response**:
   - Convert the response data into a string.
   - Extract and log the following:
     - Status code from the start line (e.g., `200`, `404`).
     - `Location` header (if present).
     - The response body.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Branches](#branches)

## Installation

To get started with this project, clone it to your local machine:

```bash
git clone <repository-url>
cd <project-directory>
```

Install dependencies (if applicable):

```bash
npm install
```

Ensure that you're using Node.js 14 or higher, as the project uses ES Modules (`"type": "module"` in `package.json`).

## Usage

To use the HTTP client for Task 11, follow these steps:

1. Modify the `main.js` file to specify the server's host and port. For example:
    ```js
    const host = '192.168.178.20'; // Target server's host
    const port = 8080; // Target server's port
    ```

2. Run the `main.js` script:
    ```bash
    node main.js
    ```

   This script sends an initial GET request to the specified server to retrieve the path and then sends a POST request to that path with the following headers:
    - `Host`
    - `Location` (from the GET request response)
    - `Content-Type` (from the GET request response)
    - `Content-Length` (based on the body length)

   The body of the POST request contains the message: `name: <your name>`.

   After receiving the response, the script logs the following:
    - Status code (e.g., `200`, `404`).
    - `Location` header (if present).
    - The response body.

   Example output:
   ```
   First Request Response: 
   HTTP Version: HTTP/1.1
   Status Code: 200
   Status Message: OK
   Headers: { 'Host': 'example.com', ... }
   Location Header: /next-location

   Second Request Response: 
   Status Code: 200
   Location Header: /new-location
   Response Body: {"message": "Success"}
   ```

## Project Structure

- `.gitignore`: Specifies files and directories to ignore in the repository.
- `package.json`: Contains project metadata, including the ES module configuration (`"type": "module"`).
- `tcpClient.js`: Creates a TCP client and connects to a server.
- `httpClient.js`: Sends HTTP requests using the TCP client.
- `httpParser.js`: Parses the raw HTTP response into structured data.
- `httpLogger.js`: Logs details of the parsed HTTP response.
- `main.js`: Implements the core functionality for Task 11: sending GET and POST requests and logging the response details.

## Branches

This repository contains the following branches:

- **`task_10`**: Implementation of Task 10, which processes the response from an HTTP GET request and logs relevant information.
- **`task_11`**: Implementation of Task 11, which sends a POST request based on the path retrieved in Task 10 and logs the response.


