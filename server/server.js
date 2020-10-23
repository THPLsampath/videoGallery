const http = require('http');
const app = require('./App');


const server = http.createServer(app);

const config = require('./configs/default');
const port = config.port;
server.listen(port, () => {
    console.log(`server starning in port ${port}`);
});