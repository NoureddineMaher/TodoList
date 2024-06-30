const asyncHandler = require('express-async-handler')
const Task = require('../models/taskModel');


const CreateTask = asyncHandler(async(req,res)=> {
    const {
        Title,Description,Status
    } = req.body;
        if (!Title || !Description || !Status){

            res.Status(400).json({message: "Please fill all fields !!"})
        }
    const addedTask = await Task.create({
        Title,Description,Status
    })

    addedTask ? res.status(200).json({message: "Request Sent Successfully ! thank you"}):  res.status(400).json({message: "ERROR , Please try Again !!"})

})

const GetAllTasks = asyncHandler(async(req,res) => {
    const getAllTaskIfExist = await Task.find({});
    getAllTaskIfExist ? res.status(200).json({getAllTaskIfExist}) : res.status(400)
    .json({message: "No Task Data Founded"})
})

const DeleteTask = asyncHandler(async(req,res) => {
    const { id } = req.params
    console.log(id);
    const checkTaskAndDelete = await Patient.findOneAndDelete({id})
    checkTaskAndDelete ? res.status(200).json({message: "Task Deleted Successfully"})
    : res.status(400).json({message: "Error try again ..! thank you"})
})

module.exports = {
    CreateTask,
    GetAllTasks,
    DeleteTask,
}