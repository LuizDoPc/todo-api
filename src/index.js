
const express = require('express');
const cors = require('cors');
const db = require('./db');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use(cors());

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`))

// GET http://172.17.0.2:49160/
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST, null, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});