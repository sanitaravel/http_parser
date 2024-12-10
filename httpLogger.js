/**
 * Logs details of an HTTP response.
 *
 * @param {Object} parsedResponse - The parsed HTTP response object.
 * @param {string} parsedResponse.httpVersion - HTTP version (e.g., HTTP/1.1).
 * @param {string} parsedResponse.statusCode - HTTP status code (e.g., 200).
 * @param {string} parsedResponse.statusMessage - HTTP status message (e.g., OK).
 * @param {Object} parsedResponse.headers - Headers as a key-value map.
 * @param {string} parsedResponse.body - The response body.
 * @param {string} prefix - Optional prefix for the log message.
 */
export function logHttpResponse(parsedResponse, prefix = 'Response') {
    // Log the prefix and details of the HTTP response
    console.log(`\x1b[36m${prefix} details:\x1b[0m`);

    // Log the HTTP version
    console.log(`HTTP Version: \x1b[32m${parsedResponse.httpVersion}\x1b[0m`);

    // Log the status code
    console.log(`Status Code: \x1b[32m${parsedResponse.statusCode}\x1b[0m`);

    // Log the status message
    console.log(`Status Message: \x1b[32m${parsedResponse.statusMessage}\x1b[0m`);

    // Log all headers
    console.log('Headers:', parsedResponse.headers);

    // Log specific headers if present, otherwise indicate they are not present
    if (parsedResponse.headers['Host']) {
        console.log(`Host header: \x1b[32m${parsedResponse.headers['Host']}\x1b[0m`);
    } else {
        console.log('\x1b[33mHost Header not present.\x1b[0m');
    }

    if (parsedResponse.headers['Location']) {
        console.log(`Location header: \x1b[32m${parsedResponse.headers['Location']}\x1b[0m`);
    } else {
        console.log('\x1b[33mLocation Header not present.\x1b[0m');
    }

    // Log the response body
    console.log('Response Body:', parsedResponse.body);

    // Indicate the end of the log
    console.log(`\x1b[36mEnd of ${prefix} details.\x1b[0m\n`);
}