const https = require('https');

const options = {
    hostname: 'fakestoreapi.com',
    path: '/products/1',
    method: 'GET'
}

const apiReq = https.request(options, (res) => {
    let body = ""
    //receive data chunk by chunk
    res.on("data", (chunk) => {
        body += chunk;
    })

    res.on("end", () => {
        console.log("Final Data :", JSON.parse(body));
        
    })
})

//handle error
apiReq.on("error", (err) => {
    console.log(err);
    
})

apiReq.end();