const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorHandler");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

connectDB();

const app = express();

if (process.env.NODE_ENV === "production") {app.use(express.json());}
else {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}

// middleware setup
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  })
);

app.use("/api/projects", require("./routes/projects"));

app.use(errorHandler);

module.exports = app;
