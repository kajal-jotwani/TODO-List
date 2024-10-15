const mongoose = require("mongoose") // Importing mongoose

const todoSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },  // Name is required and has a minimum length
    author: { type: String, required: true },  // Author is required
    uid: { type: String, required: false },  // User ID is required
    isComplete: { type: Boolean, default: false },  // isComplete defaults to false
    date: { type: Date, default: Date.now }  // Date defaults to the current date
});

// Create the Todo model
const Todo = mongoose.model('Todo', todoSchema);

exports.Todo = Todo;  // Export the Todo model
