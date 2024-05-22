require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const { checkOverLoad } = require("./helpers/check.connect");

const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// init database
require("./dbs/init.mongodb");
checkOverLoad();

// init routers
app.use("/", require("./routes"));

// handle errors
// app.use((req, res, next) => {
//   const error = new Error("Not Found");
//   error.status = 400;
//   next(error);
// });

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  
  return res.status(statusCode).json({
    status: "error",
    code: statusCode,
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
