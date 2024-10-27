// var a = 1

// get() // undefined

// function get(){
//     var a
//     console.log(a);
// }

// console.log(Date.now()); // 1720143283909
// console.log(typeof(Date.now())); // number

// function change(obj) {
//     with(obj) {
//       color = 'red'  // 在 obj 对象上没有找到 color 这个属性，直接就挂载到全局中
//     }
//   }
//   var box = {
//     size: '15*15'
//   }
//   change(box);

//   console.log(color); // red

var obj = {
    a:1,
    b:2,
    c:3
}
with (obj) {
  a = 2;
  b = 3;
  c = 4;
}
console.log(obj);
