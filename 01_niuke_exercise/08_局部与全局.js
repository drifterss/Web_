var a = 12

function change(){
    var a
    console.log(a)  // undefined
    a = 20
    console.log(a)  // 20
}

change()

var b = 3;

// 立即执行函数当中 b 发生变量提升，还是局部变量，所以全局变量中的 b 还是为 3
(function(){
    b = 5;
    var b = 2;

    console.log('@' + b);  // 2
})();


console.log(b)  // 3