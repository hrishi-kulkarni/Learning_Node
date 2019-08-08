const http = require('http');

/*const server = http.createServer();
server.listen(3000);
console.log('Listening on 3000');

server.on('connection', (socket) => {
    console.log('connected to ',socket);
}); 
*/

const server = http.createServer((req, res) => {
    if(req.url === '/')
    {
        res.write('hello');
        res.end();
    }
});

server.listen(3001);
console.log('Listening on 3001....');