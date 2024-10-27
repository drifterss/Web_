// function test(x){
//     delete x
//     return x
// }

// let num = test(1)
// console.log(num); // 1

// const [data,setDate,threedata] = ([
//     {id:1,name:'jj'},
//     {id:2,name:'jay'},
//     {id:3,name:'jjjjj'},
// ])
// console.log(data);
// console.log('------------');
// console.log(setDate);
// console.log('------------');
// console.log(threedata);

let x = new Boolean(false) // 此时 x 是一个对象，必然为 true

if(x){
    console.log(x);
    console.log("你好啊");
}

let y = Boolean(0)  // 此时是将 0 隐式转换为 Boolean 值，为 false
if(y){
    console.log(y);
}

var a = '30'
var b = 8
console.log(a%b); // 6

console.log("A" -"B" + "2"); // NaN2


