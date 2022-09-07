const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks.js");
const connectDB = require("./db/connect.js");
require('dotenv').config()

//  Middlewares
app.use(express.json());

// Routes
app.use("/api/v1/tasks", tasksRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error)
  }
};

start()

// 01: 16: 15
