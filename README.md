# TCP HTTP Client Project

This project demonstrates how to create and use a basic TCP client to send HTTP requests and handle responses. It includes the following components:

- **TCP Client (`tcpClient.js`)**: Establishes a TCP connection and sends data to a server.
- **HTTP Client (`httpClient.js`)**: Uses the TCP client to send HTTP requests and handle responses.
- **HTTP Parser (`httpParser.js`)**: Parses the HTTP response into a structured object.
- **HTTP Logger (`httpLogger.js`)**: Logs the parsed HTTP response.
- **Main Entry (`main.js`)**: Demonstrates the usage of the HTTP client to send GET and POST requests.

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

To use the HTTP client, follow these steps:

1. Modify the `main.js` file to specify the server's host and port. For example:
    ```js
    const host = '192.168.178.20'; // Target server's host
    const port = 8080; // Target server's port
    ```

2. Run the `main.js` script:
    ```bash
    node main.js
    ```

   This script sends an initial GET request to the specified server and logs the response. Then it sends a POST request with a custom body to a location provided in the GET response.

## Project Structure

- `.gitignore`: Specifies files and directories to ignore in the repository.
- `package.json`: Contains project metadata, including the ES module configuration (`"type": "module"`).
- `tcpClient.js`: Creates a TCP client and connects to a server.
- `httpClient.js`: Sends HTTP requests using the TCP client.
- `httpParser.js`: Parses the raw HTTP response into structured data.
- `httpLogger.js`: Logs details of the parsed HTTP response.
- `main.js`: Demonstrates how to use the HTTP client to interact with a server.

## Branches

This repository contains the following branches:

- **`task_10`**: Implementation of Task 10, which processes the response from an HTTP GET request and logs relevant information.
- **`task_11`**: Implementation of Task 11, which sends a POST request based on the path retrieved in Task 10 and logs the response.
- **`master`**: The main branch containing the latest stable code.