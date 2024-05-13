// 数组解构允许我们按照一一对应关系从数组中提取值，然后将值赋给变量
let [a,b,c,d] = [1,2,3]
console.log(a);     // 1
console.log(b);     // 2
console.log(c);     // 3
console.log(d);     // undefined


// 对象解构
let person = {name:'jj',song:'黑夜问白天'}

let {name,song} = person
// console.log(name);
// console.log(song);

let {name:Myname,song:Mysong} = person      // Myname属于 name 的别名
console.log(Myname);
console.log(Mysong);