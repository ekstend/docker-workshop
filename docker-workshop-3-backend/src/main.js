const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const response = { "message": "hello world" };
    const json = JSON.stringify(response);
    res.setHeader('content-type', 'application/json');
    res.send(json);

    console.log("/ " + json);
})

app.get('/env', (req, res) => {
    const json = JSON.stringify(process.env);
    res.setHeader('content-type', 'application/json');
    res.send(json);

    console.log("/env " + json);

})

app.listen(port, () => {
    console.log("app listening on port " + port);
})