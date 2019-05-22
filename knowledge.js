// function findMaxDuplicateChar(str) {  
//   if(str.length == 1) {
//     return str;
//   }
//   let charObj = {};
//   for(let i=0;i<str.length;i++) {
//     if(!charObj[str.charAt(i)]) {
//       charObj[str.charAt(i)] = 1;
//     }else{
//       charObj[str.charAt(i)] += 1;
//     }
//   }
//   console.log(charObj)

//   let maxChar = '',
//       maxValue = 1;
//   for(var k in charObj) {
//     if(charObj[k] >= maxValue) {
//       maxChar = k;
//       maxValue = charObj[k];
//     }
//   }
//   console.log(maxChar)
//   console.log(maxValue)

//   // console.log(maxChar)
//   return maxChar;

// }
// findMaxDuplicateChar('afjghdfraaaasdenas')
// function bubbleSort(arr) {  
//   for(let i = 0,l=arr.length;i<l-1;i++) {
//       for(let j = i+1;j<l;j++) { 
//         if(arr[i]>arr[j]) {
//               let tem = arr[i];
//               arr[i] = arr[j];
//               arr[j] = tem;
//           }
//       }
//   }
//   console.log(arr)
//   return arr;
// }
// function quickSort(arr) {

//   if(arr.length<=1) {
//       return arr;
//   }

//   let leftArr = [];
//   let rightArr = [];
//   let q = arr[0];
//   for(let i = 1,l=arr.length; i<l; i++) {
//       if(arr[i]>q) {
//           rightArr.push(arr[i]);
//       }else{
//           leftArr.push(arr[i]);
//       }
//   }
//   // console.log([].concat(quickSort(leftArr),[q],quickSort(rightArr)))

//   return [].concat(quickSort(leftArr),[q],quickSort(rightArr));
// }
// quickSort([2,3,4,1])

// function getMaxProfit(arr) {

//   var minPrice = arr[0];
//   var maxProfit = 0;

//   for (var i = 0; i < arr.length; i++) {
//       var currentPrice = arr[i];

//       minPrice = Math.min(minPrice, currentPrice);

//       var potentialProfit = currentPrice - minPrice;

//       maxProfit = Math.max(maxProfit, potentialProfit);
//   }
//   console.log(maxProfit)

//   return maxProfit;
// }
// getMaxProfit([5,3,6])


// function getRadomNum(min,max){
//   return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   console.log(  getRadomNum(5,10))
// const fun =(num)=>{
//   return num*2
// }

// function abc(fun){
//   // let i=0
//     return function(i=0){
//       if(i<99,i++){
//         console.log(i)
//         return fun
//     }
//   }
// }
// // console.log(fangpi(fun))
// abc(fun)

// var obj={}
// Object.defineProperty(obj,'abc',{

//   get:function(){
//     return obj
//   },
//   set:function(newValue){
//     document.getElementById('abc').value=newValue
//   }
// })
// document.addEventListener('keyup',function(e){
//   obj.abc =e.target.value
// })

// var add =function(){
//   var arg =[]
//   return funcion(){
//     if(arguments.length===0){
//       return arg.reduce(fucntion(a,b){
//         return a+b
//       })
//     }
//   }
// }


// function A (){ 
//   const q= function B (){

//   }
//   return q
// }
// var cc=a()
// cc()

// function* helloWorldGenerator() {
//   yield 'hello';
//   yield 'world';
//   yield console.log('lijiahang')
//   return 'ending';
// }

// var hw = helloWorldGenerator();
// var r;
// var arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];

// r = arr.filter(function (element, index, self) {
//   console.log(element)
//   console.log(self[index])

// 　　　　return self.indexOf(element) === index;
// 　　});

// console.log(r);

// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(words)

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


// for (var i = 1; i <= 3; i++) { //建议使用let 可正常输出i的值
//   (function (i) {
//     setTimeout(function () {
//       console.log(i);
//     }, 0);
//   }(i))
//   // console.log(i)
//   // setTimeout(function(){
//   //     console.log(i);   
//   // },0); 

// };

// var Chain={
  
//   a1:function(){
//       console.log('a1');
//       return this;
//   },
//   a2:function(){
//     setTimeout(()=>{
//       console.log('a2');
//     },2000)
//       return this;
//   },
//   a3:function(){
//     setTimeout(() => {
//       console.log('a3');
//     }, 3000);
//       return this;
//   }
// };
// Chain.a1().a2().a3()

// function A(){
//   console.log('a')
// }
// A.prototype.speak=function(){
//   console.log('speak');
//   return this
// }
// A.prototype.good=function(){
//   setTimeout(()=>{
//     console.log('good')
//   },1000)
//   return this
// }
// var ljh =new A()
// ljh.speak().good()
// // a speak good

// console.log(1)
// setTimeout(() => {
//   console.log(2)
// }, 0);
// var p =new Promise((res,rej)=>{
//   console.log(3)
//   res(4)
// })
// p.then((res)=>{
//   console.log(5)
// })
// console.log(6)
// let obje ={a:0} 
// function fun(obj){
//   obj.a=1
//   // console.log(obj)
//   obj={a:2,b:1}
//   // console.log(obj)
//   obj.b=3
//   console.log(obj === obj)
// }
// fun(obje)
// console.log(obje)


// var count =3
// function fn(){
//   // console.log(this.count)
// }
// var user={
//   count:1,
//   getcount:function(fn){
//     fn()
//     return this.count
//   }
// }
// console.log(user.getcount(fn))
// var func=user.getcount
// console.log(func(fn))

// function a(){
//   return ()=>{
//     return ()=>{
//       console.log(this)
//     }

//   }
// }
// a()()()

//动物
// function Animal(){
//   this.eat = function (){
//       console.log('Animal eat')
//   }
// }

// //狗
// function Dog() {
//   this.bark = function (){
//       console.log('Dog bark')
//   }
// }

// Dog.prototype = new Animal()

// var hashiqi = new Dog()
// hashiqi.bark()
// hashiqi.eat()

// class Animal {
//   constructor(name){
//       this.name = name
//   }
//   eat(){
//       console.log(this.name + ' eat')
//   }
// }

// class Dog extends Animal {
//   constructor(name){
//       super(name) //super就是被继承的对象的constructer
//   }
//   say(){
//       console.log(this.name + ' say')
//   }
// }

// const dog = new Dog('哈士奇')
// dog.say()
// dog.eat()

const proto = {
   drive (a) {
    console.log(a);
   }
  };
  function factoryCar () {
   return Object.create(proto);
  }
  const car3 = factoryCar();
  var car4=factoryCar()
  console.log(car3.drive('big'));
  console.log(car4.drive('small'))