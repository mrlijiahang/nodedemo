var fs =require('fs')
// var data = fs.readFileSync('index.txt');
// console.log(data.toString());
// console.log("程序执行结束!");

// readFileSync 同步读取

fs.readFile('index.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});
console.log("程序执行结束!");