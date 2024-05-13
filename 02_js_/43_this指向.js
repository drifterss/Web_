// function My() {
//   console.log(this);
// }

// new My(); // My {}  this 指向 new 出来的对象，非 window

// var o = {
//   sayHi: () => {
//     console.log(this);
//   },
// };

// o.sayHi(); // {}

// setTimeout(function () {
//   console.log(this);
// }, 1000);

// (function () {
//   console.log(this);   // window
// })();

// var a = 10;  //函数已经在体内找到名为a的了
// //因此不会到全局作用域去找全局变量a（var a = 10）
// (function a() {
//   a = 20; //这里的a是函数名，相当于修改函数a=20,无效
//   console.log(a); //a是函数名，打印整个a函数体
// })()


// const shape = {
//   name:'jj',
//   sayHi:() => {
//     console.log(this.name);
//   }
// }
// shape.sayHi()   // undefined

// let d 
// d = 1
// console.log(d); // 1

// console.log(0.1+0.2 == 0.3);  // false  可以使用 toFixed() 来解决
// console.log(0.2+0.3 == 0.5);  // true


// console.log(undefined + 1); // NaN

 
// console.log(typeof Function);   // function
// console.log(typeof Array);  // function
// console.log(typeof Object);  // function
// console.log(typeof null);  // object
// console.log(typeof 1);  // number

var a
console.log(a);




