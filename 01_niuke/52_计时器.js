// 实现一个打点计时器，要求
// 1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
// 2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
// 3、第一个数需要立即输出

function count(start, end) {
    // 方法一：setTimeout(code,millc)方法----用于在指定毫秒后计算函数或表达式
    // if (start <= end) {
    //     console.log(start++)
    //     st = setTimeout(function () {     // setTimeout 里的 code 只调用一次，如果需要多次调用请再次回调setTimeout
    //         count(start, end)            // 再一次调用这个函数
    //     }, 100)
    // } else {
    //     return {
    //         cancel : function () {
    //             clearTimeout(st)
    //         }
    //     }
    // }


    // 方法二：setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式
    //        会不停的调用函数，直到窗口关闭或 clearInterval 被调用
    console.log(start++)
    var timer = setInterval(function () {
        if (start <= end) {
            console.log(start++)
        }
    }, 100)

    return {
        cancel: function () {
            clearInterval(timer)
        }
    }
}

count(1, 4)