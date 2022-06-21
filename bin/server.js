const app = require('../src/app');
const http = require('http');
const debug = require('debug')('node-str:server');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
console.log("Server online na porta:", port);

