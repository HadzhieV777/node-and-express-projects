const getAllTasks = (req, res) => {
  res.send("Get all tasks ");
};

const createTask = (req, res) => {
  res.send("Create task");
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
