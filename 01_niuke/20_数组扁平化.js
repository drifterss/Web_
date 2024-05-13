// 请补全JavaScript代码，要求将数组参数中的多维数组扩展为一维数组并返回该数组。
// 注意：
// 1. 数组参数中仅包含数组类型和数字类型

// flat():默认降一维，但可指定参数降多维
// 方法用于将多维数组变成一维数组等，但不会改变原数组

let new_array = []
const _flatten = arr => {
    // 补全代码
    // 方法一：
    // let new_array = arr.flat(Infinity)
    // return new_array

    // 方法二：
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // 用递归调用
            _flatten(arr[i])
        } else {
            new_array.push(arr[i])
            // console.log(new_array)
        }
    }
    return new_array
}

array = [1, [2, [3, [4]]]]

new_array = _flatten(array)

console.log(new_array);