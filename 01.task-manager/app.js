const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks.js");
const connectDB = require("./db/connect.js");
require('dotenv').config()
const errorHandlerMiddleware = require("./middlewares/error-handler.js")
const notFound = require("./middlewares/not-found.js")

//  Middlewares
app.use(express.static('./public'))
app.use(express.json());

// Routes
app.use("/api/v1/tasks", tasksRoutes);
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error)
  }
};

start()

// 03: 07: 34

