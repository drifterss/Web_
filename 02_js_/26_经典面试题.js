// var 声明的变量不会产生块级作用域
var arr = []
for(var i = 0;i < 2;i++){
    arr[i] = function(){
        console.log(i)      // 此时 i 为全局变量
    }
}
arr[0]()    // 2
arr[1]()    // 2

// let 声明的变量产生了两个块级作用域
var arr = []
for(let i = 0;i < 2;i++){
    arr[i] = function(){
        console.log(i)      // 此时 i 去对应的块级作用域寻找
    }
}
arr[0]()    // 0
arr[1]()    // 1