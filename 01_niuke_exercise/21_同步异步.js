setTimeout(function(){
    console.log(1);
}, 0)
new Promise(function execulor(resolve) {
    console.log(2)
    for (var i = 0; i < 10000; i += 1) {
        i == 9999 && resolve()
    }
    console.log(3)
}).then(function () {
    console.log(4)
})
console.log(5)

// 先执行 promise 中的同步任务，打印 2 ，3；promise 变成完成状态,再打印 5 ，then进入微队列，再宏任务结束之前执行，打印 4，最后打印 1

// 2,3,5,4,1