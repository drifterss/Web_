// var a = 1;
// function test() {
//     console.log(a);
//     if(false) {
//         var a = 2;      // 这里会存在变量提升
//     }
// }
// test();

// 其实对应如下代码
var a
a = 1
function test(){    // 函数会先从内部寻找变量，如果没有再往上找
    var a
    console.log(a)      
    if(false){
        a = 2
    }
    console.log('@@'+a)  // @@undefined
}

test()      // undefined