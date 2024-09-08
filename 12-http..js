const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to the nodejs home page");
  }
  if (req.url === "/about") {
    res.end("here is our short history");
  } else {
    res.end(`<h1>OOPS</h1>
    <p> we can t ot finnd the  page you are lookig for</p>
    <a href="/">back home</a>`);
  }
});
server.listen(50000);
