# TCP HTTP Client Project - Task 10

This branch contains the implementation for Task 10, which involves writing a Node.js script that connects to a server, sends an HTTP GET request, and processes the response. The script uses the `net` module to create a TCP connection to the server and sends a valid HTTP GET request for the root path (`/`) with the `HOST` header. Upon receiving a response, the script extracts and logs relevant details such as the HTTP version, status code, status message, headers, and the `Location` header.

## Task 10 Requirements

1. **Connect to a server**: The script connects to a server running on a given IP address and port.
2. **Send an HTTP GET request**: A valid HTTP GET request is sent to the server for the root path (`/`).
3. **Process the response**:
    - Convert the response data into a string.
    - Extract and log the following:
        - HTTP version (e.g., `HTTP/1.1`).
        - `Host` header.
        - Status code (e.g., `200`, `404`).
        - Status message (e.g., `OK`, `Not Found`).
        - All headers from the response.
        - `Location` header (if present).

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

To use the HTTP client for Task 10, follow these steps:

1. Modify the `main.js` file to specify the server's host and port. For example:
    ```js
    const host = '192.168.178.20'; // Target server's host
    const port = 8080; // Target server's port
    ```

2. Run the `main.js` script:
    ```bash
    node main.js
    ```

   This script sends a GET request to the specified server, processes the response, and logs the following information:
    - HTTP version
    - Status code and message
    - All headers (including `Host` and `Location`)

   Example output:
   ```
   First Request Response: 
   HTTP Version: HTTP/1.1
   Status Code: 200
   Status Message: OK
   Headers: { 'Host': 'example.com', ... }
   Location Header: /next-location
   ```

## Project Structure

- `.gitignore`: Specifies files and directories to ignore in the repository.
- `package.json`: Contains project metadata, including the ES module configuration (`"type": "module"`).
- `tcpClient.js`: Creates a TCP client and connects to a server.
- `httpClient.js`: Sends HTTP requests using the TCP client.
- `httpParser.js`: Parses the raw HTTP response into structured data.
- `httpLogger.js`: Logs details of the parsed HTTP response.
- `main.js`: Implements the core functionality for Task 10: sending an HTTP GET request and logging the response details.

## Branches

This repository contains the following branches:

- **`task_10`**: Implementation of Task 10, which processes the response from an HTTP GET request and logs relevant information.
- **`task_11`**: Implementation of Task 11, which sends a POST request based on the path retrieved in Task 10 and logs the response.
