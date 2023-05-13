const http = require("http");

// const requestListener = (req, res) => {
//   res.writeHead(200, { "content-type": "text/plain" });
//   res.end("hello world \n");
// };

// const requestListener = (req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end("hello world \n");
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end("Welcome to the about page \n");
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("This is an error \n");
//   }
// };

const requestListener = (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/" });
    res.end("hello world \n");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to the about page \n");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("This is an error \n");
  }
};

const server = http.createServer(requestListener);

server.listen(3000, () => console.log("server started at port 3000"));
