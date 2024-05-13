// const 声明常量：内存地址不变的量
// 使用 const 声明的变量具有块级作用域
// 使用 const 声明常量时必须赋初始值
// 常量声明后值不能更改即地址不能被修改，但如果为数组类型，可以更改里面单个的值

// const PI = 3.14
// PI = 4          // 报错

// console.log(+new Array(017));

var a = 12
function test(){
    console.log(a)   // undefined

    var a = 20
    console.log(a);  // 20
}

test()
