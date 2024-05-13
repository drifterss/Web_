// console.log(Boolean([]));  // true
// console.log(Number([]));    // 0
// console.log(Number(false)); // 0
// console.log(Number({}));    // NaN

// console.log([] == false);   // true
// console.log({} == false);   // false

// var arr = new Array(3)
// arr.b = 1
// console.log(arr.length);

// console.log(null == false); // false

// x = {x:1}
// y = {y:1}
// console.log(x == y); // false

// z = 1
// n = '1'
// console.log(z == n); // true

// console.log(1 == true);  // true
 
// console.log(null == 0); // false

// let arr 
// console.log(arr);   // undefined

// console.log(typeof([1,2]));  // object
// console.log([1,2] instanceof Array); // true
// console.log(Object.prototype.toString.call([1,2])); // [object Array]
// console.log(Object.prototype.toString.call('str')); // [object String]

// console.log(+new Array(0o17));

// var obj ={a:1,b:function () {console.log(this.a)}}; 
// var fun =obj.b; 
// fun();  // undefined

// console.log(Array.isArray([1,2]));  // true

// var x = 10;
// var foo = () => {
//     console.log(x);
//     var x = 20;
//     x++;
// }
// foo();


// var a = 1;
// function test(){
//     // 位置A
//     // console.log(a);
// class a {}
//    // 位置B
// //    console.log(a);
// }
// test();

// var m= 1, j = k = 0; 
//     function add(n) { 
//         return n = n+1; 
// 　 } 
//     y = add(m); 
//     function add(n) { 
//         return n = n + 3; 
//     } 
// z = add(m); 
// console.log(y);  // 4
// console.log(z);  // 4

// (function() {
//     var a = b = 5;
// })();   
// console.log(b);
// console.log(a); // a is not defined

// console.log(typeof null);   // object
// console.log(typeof undefined);  // undefined

// console.log(Object.prototype.toString.call(null)); // [object Null]

// console.log(5 + '3');
// console.log(typeof ''.__proto__); // object

// console.log(2 == '2'); // true

// console.log(null || undefined);  // undefined

// console.log(null && undefined);  // null

// function test(arg){
//     arg.age=22
   
// }

// var b = {age:18}
// test(b);
// console.log(b.age);  // 22

// function aa(){
//     c = 10
//     function bb(){
//         console.log(++c);
//     }
//     return bb
// }
// var f1 = aa()
// console.log(f1());  // 11
// console.log(f1());  // 12





// function cc(){ 
//     n = 1
// }
// cc()
// console.log(n);  // 1

// const test = {
//     rules:false
// }

// function dd(){
//     this.rules = true
// }
// var d = new dd()
// console.log(d.rules); // true


