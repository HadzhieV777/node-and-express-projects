require("dotenv").config();
require('express-async-errors');

const express = require("express");
const app = express();

const connectDB = require('./db/connect.js')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require("./middleware/not-found.js");
const errorHandlerMiddleware = require("./middleware/error-handler.js");

// Middleware
app.use(express.json());

// Routes

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/products">Products</a>');
});

app.use('/api/v1/products', productsRouter);

//  Proudcts route
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;


const start = async () => {
  try {
    // connect DB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

//  03: 26: 16