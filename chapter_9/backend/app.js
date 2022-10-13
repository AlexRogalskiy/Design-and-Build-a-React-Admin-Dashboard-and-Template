const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const connectDB = require("./config/db");
const schema = require("./controllers/controllers");

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

app.use("/api", graphqlHTTP({
  schema, 
  graphiql: process.env.NODE_ENV === "test" ? true : false
}));


module.exports = app;
