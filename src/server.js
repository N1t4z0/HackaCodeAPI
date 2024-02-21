const express = require("express");
const routes = require("./routes/routes");
const server = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cookieParser());
server.use(morgan("combined"));
server.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});
server.use("/api", routes);

module.exports = server;
