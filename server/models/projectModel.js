const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    Title: {
        type: String,
    },
    Description: {
        type: String,
    },
    Task: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Task'
        }
    ],
    endDate: {
        type: Date,
    },
})

module.exports = mongoose.model("Project", projectSchema);