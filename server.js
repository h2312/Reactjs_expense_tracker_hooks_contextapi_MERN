const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});

connectDB();

const transactions = require('./routes/transactions');

const app = express();

app.use(express.json()); // allow to use body parse

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));

}

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 2312;
app.listen(PORT, console.log(`Server runnning in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));