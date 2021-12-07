
const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

console.log('running angular color app');

app.use(express.static(__dirname + '\\dist\\color_app'));
app.get('/*', function(req,res) {
    res.sendFile('dist\\color_app\\index.html');
});

const port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));
