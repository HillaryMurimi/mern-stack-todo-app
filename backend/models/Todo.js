const mongoose = require('mongoose')

//define the schema for the todo model
const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    description: [ {
        type: String,
        required: true
    }],
    date: {
        type: Date,
        default: Date.now
    }

})

//create and export the Todo model
module.exports = mongoose.model('Todo', todoSchema);