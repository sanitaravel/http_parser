/**
 * Parses an HTTP response string into its components.
 *
 * @param {string} response - The raw HTTP response string.
 * @returns {Object} - Parsed HTTP response components.
 * @throws {Error} - If the HTTP status line is invalid.
 */
export function parseHttpResponse(response) {
    // Split the response into headers and body
    const [headerSection, body] = response.split('\r\n\r\n');
    const headers = headerSection.split('\r\n');

    // Extract HTTP version, status code, and status message
    const statusLine = headers[0];
    const statusMatch = statusLine.match(/(HTTP\/\d\.\d) (\d{3}) (.+)/);
    if (!statusMatch) {
        throw new Error('Invalid HTTP status line.');
    }

    const [_, httpVersion, statusCode, statusMessage] = statusMatch;

    // Extract headers into a map
    const headerMap = {};
    headers.slice(1).forEach((headerLine) => {
        const [key, value] = headerLine.split(': ');
        if (key && value) {
            headerMap[key] = value;
        }
    });

    return {
        httpVersion,
        statusCode,
        statusMessage,
        headers: headerMap,
        body,
    };
}