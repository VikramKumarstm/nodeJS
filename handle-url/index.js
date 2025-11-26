const http = require('http');
const https = require('https');
const { hostname } = require('os');

const PORT = 8080;

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello world!!!');
        res.end();

    } else if(req.url === '/about') {
        res.write('About page');
        res.end();
    } else if(req.url === '/contact') {
        res.write('Contact-us page');
        res.end();
    } else if(req.url === '/products') {

        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products',
            method: 'GET'
        }

        const apiReq = https.request(options, (apiRes) => {
            let body= ''

            apiRes.on('data', (chunk) => {
                body += chunk;
            })

            apiRes.on('end', () => {
                console.log("api communicate successfuly");
                res.statusCode= 200,
                res.setHeader("Content-Type", "application/json");
                res.write(body)
                res.end();
            })
        });
``
        apiReq.on("Error :", (error) => {
            console.log(error);
            
        });

        apiReq.end();

    } else {
        res.write("Page not found!!!");
        res.end();
    }
})

server.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
    
})