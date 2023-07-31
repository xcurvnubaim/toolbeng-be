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

// const accountRoutes = require('./routes/account');
// const journalRoutes = require('./routes/journal');
// const transactionRoutes = require('./routes/transaction');

// app.use('/account', accountRoutes);
// app.use('/journal', journalRoutes);
// app.use('/transaction', transactionRoutes);