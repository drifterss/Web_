// 1. 根据输入的数字范围[start,end]和随机数个数"n"生成随机数
// 2. 生成的随机数存储到数组中，返回该数组
// 3. 返回的数组不能有相同元素
// 注意：
// 1. 不需要考虑"n"大于数字范围的情况


const _getUniqueNums = (start,end,n) => {
    // 补全代码

    set = new Set()

    for(let i = 0;i < n;i++){
        var result = parseInt(Math.random()*(end-start+1)+start)
        console.log(result)
        set.add(result)
    }    

    new_array = Array.from(set)

    return new_array
}

console.log(_getUniqueNums(2,10,2))