const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config()

app.use(express.json());
app.use(cors({
    origin : "*"
}))

app.listen(5000, console.log("Listening http://localhost:5000"));

const routes = require('./routes');

app.use('/', routes);
