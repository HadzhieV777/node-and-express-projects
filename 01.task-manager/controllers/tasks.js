const Task = require("../models/task.js");

// Get all
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});

    // res.status(200).json({ tasks });
    // res.status(200).json({ tasks, amout:tasks.length });
    res
      .status(200)
      .json({ success: "Success", data: { tasks, nbHits: tasks.length } });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Create
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Get single
const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// PATCH  Unlike PUT method, PATCH does partial update.
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }

    res.status(200).json({ id: taskID, data: req.body });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

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
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }

    res.status(200).json({ task: null, status: "success" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};

// Mongoose casts the filter to match the model's schema before
// the command is sent.
