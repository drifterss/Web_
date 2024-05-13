var a = '4399' - 1
console.log(a);  // 4398

console.log(typeof 1.2); // number

console.log(null == 0); // false

console.log(typeof Date.now()); /// number

let i = parseInt(0xA)
console.log(i);  // 10

let j = 0
new Array(10).forEach(()=>{
    j++
})
console.log(j)   // 0

let k = 1 + {valueOf(){return 9}}
console.log(k)      // 10