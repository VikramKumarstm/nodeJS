const http = require('http');
const { json } = require('stream/consumers');

const PORT = 8000

const server = http.createServer((req, res) => {
    res.statusCode= 200;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({error:'Server Error!'}));
})

server.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT}`);
    
})