
const express = require('express');

const PORT = 8080;
const HOST = 'localhost';

const app = express();

// GET http://localhost:8080/
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST, null, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});