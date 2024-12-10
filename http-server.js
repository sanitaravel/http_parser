import express from 'express';
import fs from 'node:fs';

const PORT = 8080;
const HOST = "localhost";

if (!fs.existsSync('names.txt')) {
    fs.writeFileSync('names.txt', '');
}

const app = express();
app.disable('x-powered-by');

app.use((req, res, next) => {
    res.set("Connection", "close");
    res.removeHeader('Vary');

    if (req.url === '/names-json') return next();

    console.log(req.ip, req.method, req.url);
    next();
})

app.get('/', (req, res) => {
    res.redirect(301, '/submit');
})

app.post('/submit', (req, res) => {
    let body = "";
    req.on("data", (chunk) => body += chunk.toString());

    req.on("end", () => {
        if (req.headers["content-type"] !== "text/plain" && req.headers["content-type"] !== "text/plain; charset=utf-8") {
            res.writeHead(415);
            res.end('415 Unsupported Media Type');
            return;
        }
        if (!req.headers["content-length"] || isNaN(parseInt(req.headers["content-length"]))) {
            res.writeHead(411);
            res.end('411 Length Required');
            return;
        }
        if (!body) {
            res.writeHead(400);
            res.end('400 Bad Request. Body is empty');
            return;
        }
        if (!body.startsWith("name:") || !body.slice(5).trim()) {
            res.writeHead(400);
            res.end('400 Bad Request. Send data in format: name: <your name>');
            return;
        }

        const name = body.slice(5).trim();

        const names = fs.readFileSync('names.txt', 'utf-8');
        if (names.includes(name)) {
            res.status(409).setHeader("Location", "/names").end('409 Conflict');
            return;
        }

        const data = name + ', at ' + new Date().toLocaleTimeString();
        fs.appendFileSync('names.txt', data + '\n');

        res.status(201).setHeader("Location", "/names").end(data);
    });
})

app.get('/names', (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(`
        <html lang="en">
            <head>
                <title>Names</title>
            </head>
            <body>
                <h1>Names</h1>
                <ul id="list"></ul>
                <script>
                    const PORT = 8080;
                    const HOST = "localhost";
                    
                    const listNode = document.querySelector("#list");
                    
                    const func = async () => {
                        const response = await fetch("http://"+HOST+":"+PORT+"/names-json");
                        const entries = await response.json();
                        
                        if (!entries) return;
                    
                        listNode.innerHTML = "";
                        
                        entries.forEach((entry) => {
                            const liNode = document.createElement("li");
                            liNode.innerText = entry;
                            listNode.appendChild(liNode);
                        })
                    }
    
                    func()
                    
                    setInterval(func, 2000)
                </script>
            </body>
        </html>
    `);
})

app.get('/names-json', (req, res) => {
    const names = fs.readFileSync('names.txt', 'utf-8');

    const entries = names.split('\n').filter(Boolean);

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(entries));
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})