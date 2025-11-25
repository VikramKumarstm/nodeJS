const http = require('http')

const PORT = 8000

const server = http.createServer((req, res) => {
    res.end('Node server created by Vikram!');
})

server.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT}`);
    
})