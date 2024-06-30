const express = require('express');
const app = express();
const PORT = 5000;
require('dotenv').config();  // Ensure you load the .env file
const connection = require('./config/connectdb')
connection();

const cors = require('cors');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.listen(PORT , () => {
    console.log(`server connected at port: ${PORT}`)
});