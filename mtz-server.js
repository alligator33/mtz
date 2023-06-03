const http = require("http");
const app = require("./app");

const API_PORT = process.env.API_PORT;


const server = http.createServer(app);

server.listen(API_PORT);

console.log(`server started on http://localhost:${API_PORT }`);
