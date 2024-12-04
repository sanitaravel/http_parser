/**
 * Logs details of an HTTP response.
 *
 * @param {Object} parsedResponse - The parsed HTTP response object.
 * @param {string} parsedResponse.httpVersion - HTTP version (e.g., HTTP/1.1).
 * @param {string} parsedResponse.statusCode - HTTP status code (e.g., 200).
 * @param {string} parsedResponse.statusMessage - HTTP status message (e.g., OK).
 * @param {Object} parsedResponse.headers - Headers as a key-value map.
 * @param {string} parsedResponse.body - The response body.
 */
export function logHttpResponse(parsedResponse) {
    console.log('HTTP Version:', parsedResponse.httpVersion);
    console.log('Status Code:', parsedResponse.statusCode);
    console.log('Status Message:', parsedResponse.statusMessage);
    console.log('Headers:', parsedResponse.headers);

    // Log specific headers
    console.log('Host Header:', parsedResponse.headers['Host']);
    if (parsedResponse.headers['Location']) {
        console.log('Location Header:', parsedResponse.headers['Location']);
    } else {
        console.log('Location Header not present.');
    }

    // Optional: log the response body
    console.log('Response Body:', parsedResponse.body);
}
