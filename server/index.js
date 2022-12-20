// lib
const http = require("http");

// custom
const app = require("./src/api/v1");
const { HOST, PORT } = require("./src/api/v1/config");

// create server
const server = http.createServer(app);

// start server
server.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}, url http://${HOST}:${PORT}`);
});
