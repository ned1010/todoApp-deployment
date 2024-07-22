//Todo data format schema
const mongoose = require("mongoose");


//Schema -> a structure of our document (equivalent table in Relational Database)
const TodoSchema = mongoose.Schema({
    // id: {type: Number, required: true},
    id: {type: String},
    text: {type: String, required: true},
    completed: {type: Boolean}
})


const TodoModel = mongoose.model("todos", TodoSchema);

module.exports = TodoModel;
