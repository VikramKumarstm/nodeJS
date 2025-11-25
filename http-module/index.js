const http = require('http')

const PORT=8000
const server = http.createServer((req, res) => {
    if(req.url =='/') {
        res.write('<h1>Hello nodeJS</h1>');
    } else if(req.url == '/about') {
        res.write('<h1>About page</h1>');
    }
    res.end();
});

server.listen(PORT, () => {
    console.log(`server listen on localhost:${PORT}`);
})