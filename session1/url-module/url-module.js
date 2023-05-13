const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  // console.log(parsedUrl);
  const pathname = parsedUrl.pathname;
  const queryParams = parsedUrl.query;
  console.log(queryParams);
  console.log(queryParams.search);
  let responseText = "";

  //for example enter this url => http://localhost:3000/?search=10 and you'll understand.
  switch (pathname) {
    case "/":
      if (queryParams.search)
        responseText =
          "Welcome to the homepage! You searched for: " + queryParams.search;
      else responseText = "No search was made";
      break;
    case "/about":
      responseText = "This is the about page.";
      break;
    default:
      responseText = "Page not found.";
      break;
  }

  // Set the content type and send the response
  res.setHeader("Content-Type", "text/plain");
  res.end(responseText);
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
