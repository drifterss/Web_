// 为 Array 对象添加一个去除重复项的方法 ---- 扩展内置对象

Array.prototype.uniq = function(){

    // 把数组转化为集合
    var set = new Set(this)

    // 把集合转化为数组并返回
    return Array.from(set)
}

var arr = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]

// arr 调用 uniq 函数，相当于 this 指向 arr
console.log(arr.uniq());