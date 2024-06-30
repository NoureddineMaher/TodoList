const express = require('express');
const app = express();

const createProject = require('../controllers/projectController')

app.post('/project', createProject);


module.exports = app;