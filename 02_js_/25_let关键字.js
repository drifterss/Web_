// ① let 关键字是用来声明变量的，且声明的变量具有块级作用域(只在当前块内有效)
// ② 在一对大括号中，使用 let 声明的变量才具有块级作用域，var 不具备这个特点
// ③ let声明：防止循环变量变成全局变量
// ④ let 声明的变量没有变量提升，只能先声明再使用
// ⑤ 使用 let 声明的变量具有暂时性死区


// ① let 关键字是用来声明变量的，且声明的变量具有块级作用域
// if(true){
//     let a = 10
// }
// console.log(a);     // a is not defined


// ② 在一对大括号中，使用 let 声明的变量才具有块级作用域，var 不具备这个特点
// if(true){
//     let a = 10
//     var b = 20
// }
// console.log(b);    
// console.log(a);      // a is not defined



// ③ let声明：防止循环变量变成全局变量
// for(let i = 0;i < 3;i++){

// }
// console.log(i);     // i is not defined

// ⑤ 使用 let 声明的变量具有暂时性死区

// var num = 10
// if(true){
//     console.log(num)    // num is not defined
//     let num = 20
// }



