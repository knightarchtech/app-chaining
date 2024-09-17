const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const THIS_SERVER = process.env.THIS_SERVER || "Server";
const FORWARD_URL = process.env.FORWARD_URL || '';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


app.use(express.json());

// Endpoint 1: Display request and response headers
app.get('/headers', (req, res) => {
    const requestHeaders = req.headers;
    const responseHeaders = {
        'Content-Type': 'application/json',
        'Custom-Response-Header': 'MyCustomHeaderValue'
    };

    res.set(responseHeaders);
    res.status(200).json({
        message: 'Request and response headers',
        requestHeaders,
        responseHeaders
    });
});

// Endpoint 2: Forward the request to another API
app.all('/forward', async (req, res) => {
    const targetUrl = `${FORWARD_URL}`;
    console.log("Target URL: " + targetUrl);

    if (targetUrl == '') {
        const requestHeaders = req.headers;
        const responseHeaders = {
            'Content-Type': 'application/json',
            'Custom-Response-Header': 'MyCustomHeaderValue'
        };
    
        res.set(responseHeaders);
        res.status(200).json({
            message: 'Request and response headers',
            requestHeaders,
            responseHeaders
        });        
    }
    else {
        axios
        .get(targetUrl)
        .then(response => {
          let responseData = response.data;
          res.send(responseData);
        })
       .catch(err => {
          res.send({ err })
        })  
    }
});

app.listen(PORT, () => {
    console.log(`${THIS_SERVER} running on port ${PORT}`);
});
