const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.js");

//  - get all tasks
router.route("/").get(getAllTasks);

//  - create new task
router.route("/").post(createTask);

//  - get single task
router.route("/:id").get(getSingleTask);

// - update task
router.route("/:id").patch(updateTask);

// - delete task
router.route("/:id").delete(deleteTask);

module.exports = router;
