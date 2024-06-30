const mongoose = require('mongoose')

const TaskRequestModel = mongoose.Schema({

    Title : {
        type: String
    },
    Description: {
        type : String
    },
    Status: {
        type : String
    }
})

module.exports = mongoose.model('Task', TaskRequestModel)