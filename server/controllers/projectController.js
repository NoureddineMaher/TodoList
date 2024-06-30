const asyncHandler = require('express-async-handler');
const project = require('../models/projectModel');


const createProject = asyncHandler(async(req,res) => {
    const { title , description , Task , endDate } = req.body;

    // if(!title || !description || !endDate){
    //     res.status(400)
    //        .json({ message: "please fill all fields !"})
    // }

    const Addedproject = await project.create({
        title,
        description,
        endDate
    })

    Addedproject 
    ? res.status(200).json({Addedproject}) 
    : res.status(400).json({ message: "failed to add project"})
})

module.exports = createProject;