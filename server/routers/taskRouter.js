const express = require("express");
const app = express();
const {DeleteTask,GetAllTasks,CreateTask}=require('../controllers/taskController')
app.post('/task',CreateTask)

module.exports=app;

