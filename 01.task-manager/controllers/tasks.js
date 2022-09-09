const Task = require("../models/task.js");
const asyncWrapper = require("../middlewares/async.js");
const {createCustomError} = require('../errors/custom-error.js')

// Get all
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });

  // res.status(200).json({ tasks });
  // res.status(200).json({ tasks, amout:tasks.length });
  // res.status(200).json({ success: "Success", data: { tasks, nbHits: tasks.length } });
});

// Create
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
});

// Get single
const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404))
  }
  res.status(200).json({ task });
});

// PATCH  Unlike PUT method, PATCH does partial update.
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404))
  }

  res.status(200).json({ id: taskID, data: req.body });
});

// PUT is a method of modifying resources where the client sends data that updates the entire resource.
// const editTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,
//       overwrite: true,
//     });

//     if (!task) {
//       return res.status(404).json({ msg: `No task with id: ${taskID}` });
//     }

//     res.status(200).json({ id: taskID, data: req.body });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// Delete
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404))
  }

  res.status(200).json({ task: null, status: "success" });
});

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};

// Mongoose casts the filter to match the model's schema before
// the command is sent.

// REF => http://expressjs.com/en/guide/error-handling.html#the-default-error-handler
