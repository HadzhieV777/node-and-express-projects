const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks.js");
const connectDB = require("./db/connect.js");
require('dotenv').config()
const notFound = require("./middlewares/not-found.js")

//  Middlewares
app.use(express.static('./public'))
app.use(express.json());

// Routes
app.use("/api/v1/tasks", tasksRoutes);
app.use(notFound)


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

// 02: 37: 02

