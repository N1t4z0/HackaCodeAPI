require("dotenv").config();

const server = require("./server");
server.listen(process.env.PORT);
console.log("Server on port", process.env.PORT);
