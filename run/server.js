const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8080;

const server = http.createServer((req, res) => {
  let urlPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(process.cwd(), '../', urlPath);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
    } else {
      let ext = path.extname(filePath).toLowerCase();
      let mime = 'text/html';
      if (ext === '.js') mime = 'application/javascript';
      else if (ext === '.css') mime = 'text/css';
      else if (ext === '.json') mime = 'application/json';
      else if (ext === '.png') mime = 'image/png';
      else if (ext === '.jpg' || ext === '.jpeg') mime = 'image/jpeg';
      else if (ext === '.svg') mime = 'image/svg+xml';
      res.writeHead(200, { 'Content-Type': mime });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
