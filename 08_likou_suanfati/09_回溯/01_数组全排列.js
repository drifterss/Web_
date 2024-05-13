// 回溯算法

// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

// 示例:

// 输入: [1,2,3]
// 输出: [ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

var permute = function(nums) {

    const result = []   // 二维数组保存所有的叶子节点
    const path = []     // 一维数组保存单个叶子节点

    const used = []   // 用来标记哪个元素已经被使用了
    k = nums.length 

    backtreeing(nums,k,used)

    return result

    function backtreeing(nums,k,used){
        // 如果 path 的长度 等于 nums 的长度，则把叶子节点添加到结果当中
        if(path.length == k){
            result.push(Array.from(path))
            return
        }

        for(let i = 0;i <  k;i++){
            if(used[i])  continue   // 如果该位置已取，继续取下一位置元素

            path.push(nums[i])
            used[i] = true  // 同支

            // 继续取下一位置
            backtreeing(nums,k,used)

            // 回溯
            path.pop()
            used[i] = false
        }
    }


}

nums = [1,2,3]
res = permute(nums)
console.log(res);