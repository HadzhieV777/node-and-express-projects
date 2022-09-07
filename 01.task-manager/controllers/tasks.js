const Task = require("../models/task.js");

const getAllTasks = (req, res) => {
  res.send("Get all tasks ");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
};

const getSingleTask = (req, res) => {
  res.send("Get single task");
};

const updateTask = (req, res) => {
  res.send("Update single task");
};

const deleteTask = (req, res) => {
  res.send("Delete single task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
