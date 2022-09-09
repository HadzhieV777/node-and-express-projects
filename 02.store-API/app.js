require("dotenv").config();
// async errors

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found.js");
const errorMiddleware = require("./middleware/error-handler.js");

// Middleware
app.use(express.json());

// Routes

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/products">Products</a>');
});

//  Proudcts route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

// const port = proccess.env.PORT || 3000;
const port = 3000;

const start = async () => {
  try {
    // connect DB
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

// 03: 18: 01