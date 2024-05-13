// 要求每次调用函数"closure"时会返回一个新计数器。每当调用某个计数器时会返回一个数字且该数字会累加1。
// 注意：
// 1. 初次调用返回值为1
// 2. 每个计数器所统计的数字是独立的


// 考点：闭包
// 1、声明一个初始变量，值为 0
// 2、返回一个匿名函数，使得数字变量加 1
const closure = () => {
    // 补全代码
    let count = 0

    return function (){
        count++
        return count
    }
}