const http = require("http");

//const server=http.createServer((req,res)=>{
//   res.end('welcome')
// // })
// using event eemitter ApI
const server = http.createServer();
//emits reequest event
//subscibe to it/ listen for it/respond to it
server.on("request", (req, res) => {
  res.end("welcome");
});
server.listen(1000);
