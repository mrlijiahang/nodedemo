
// 第一题  JavaScript 执行机制 我们分享讲过的
// console.log('1');

// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })
// process.nextTick(function() {
//     console.log('6');
// })
// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     console.log('8')
// })

// setTimeout(function() {
//     console.log('9');
//     process.nextTick(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })


// 第二题 this指向
var count =3
function fn(){
  console.log(this.count)
}
var user={
  count:1,
  getcount:function(fn){
    fn()
    return this.count
  }
}
console.log(user.getcount(fn))



var func=user.getcount
console.log(func(fn))

function a(){
  return ()=>{
    return ()=>{
      console.log(this)
    }

  }
}
a()()()




// 第三题 对象
// let obje ={a:0} 
// function fun(obj){
//   obj.a=1
//   obj={a:2,b:1}
//   obj.b=3
// }
// fun(obje)
// console.log(obje)