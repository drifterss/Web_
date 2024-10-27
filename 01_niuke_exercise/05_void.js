var obj = {}
obj.log = console.log
obj.log.call(console,this) // window

// var a = b = 1
// console.log(a);  // undefined
// console.log(b);  // 1

// var a = 1
// function test(){
//     // console.log(a);

// class a{}
//     console.log(a);

// }
// test()

console.log((()=>{}).length);  // 获取的是形参的个数，  0
console.log(1&2);  // 0     
console.log(+[]);  // 0
console.log([1,2,-3].reduce((a, b) => a - b, 0)); // 0-1 == -1-2 == -3+3 = 0

