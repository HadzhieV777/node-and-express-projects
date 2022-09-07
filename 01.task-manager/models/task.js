const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name!'],
    trim:true,
    maxlength: [20, 'Name cannot contain more than 20 characters!']
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
// A model is a class with which we construct documents. In this case, each document will be a
// kitten with properties and behaviors as declared in our schema.
// The model is a wrapper for the schema
