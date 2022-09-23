const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorHandler");
const connectDB = require("./config/db");

connectDB();

const app = express();

// middleware: json
app.use(express.json());

// middleware: cors
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  })
);

app.use("/api/projects", require("./routes/projects"));

// middleware: error handling
app.use(errorHandler);

module.exports = app;
