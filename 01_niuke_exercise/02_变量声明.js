var a = 10
var a
console.log(a)  // 10

console.log(undefined == 0);  // false,  undefined 会被转换为 NaN

console.log(undefined == false);    // false

console.log(['1','2','3'].join())   // 1,2,3

console.log(['1','2','3'].join(""))    // 123

console.log(13/3);  // 4.333333333333333

// var foo = {
//     bar(){
//       (function(){console.log(this)})()
//     }
//   }
// foo.bar()   // window

console.log(typeof NaN)   // number

console.log(typeof Object)   // function

console.log(Function instanceof Object)   // true

console.log(Object instanceof Function)   // true

console.log('-------------------------')

console.log(null == undefined)      // true

console.log(null === null)      // true
console.log(NaN === NaN)      // false
console.log(NaN == null)      // false
console.log(Infinity + 1 !== Infinity)      // false