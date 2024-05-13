
// 计算 sum 中参数的总和, 剩余的参数都可以放在 ...args 当中
const sum = (...args) => {
    // 此时 args 可看作为一个参数数组
    var total = 0
    args.forEach(
        (item) => {
            total += item
        }
    )
    return total
}

console.log(sum(10,20))     // 30

console.log(sum(10,20,30));  // 60


// 剩余参数和解构配和使用
var array = ['醉赤壁','茉莉雨','兰亭序']

let [s1,...s2] = array

console.log(s1)
console.log(s2)