
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const taskRoutes = require('./routes/task.routes');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());
app.use(cors());
app.use(taskRoutes);

db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

app.listen(PORT, HOST, null, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});