const express = require('express');
const app = express();
const PORT = 5000;
require('dotenv').config();  // Ensure you load the .env file
const persistdb = require('./config/persistdb')
persistdb();
const projectRouter = require('./routers/projectRouter')

const cors = require('cors');
app.use(cors({origin:true,credentials:true}));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use('/api', projectRouter);
app.listen(PORT , () => {
    console.log(`server connected at port: ${PORT}`)
});