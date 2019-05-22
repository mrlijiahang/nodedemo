// function say(word) {
//   console.log(word);
// }

// function execute(someFunction, value) {
//   someFunction(value);
// }

// execute(say, "Hello111");


// 匿名函数
// function execute(someFunction, value) {
//   someFunction(value);
// }

// execute(function(word){ console.log(word) }, "Hello");

// http
// var http = require("http");

// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(8888);

var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello 11World");
  response.end();
}

http.createServer(onRequest).listen(8888);