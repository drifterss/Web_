// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

// 子数组是数组中元素的连续非空序列。

// 示例 1：

// 输入：nums = [1,1,1], k = 2
// 输出：2
// 示例 2：

// 输入：nums = [1,2,3], k = 3
// 输出：2

var subarraySum = function (nums, k) {

    // 暴力法
    // let count = 0
    // for (let i = 0; i < nums.length; i++) {

    //     // 每次需要把 sum 归零
    //     let sum = 0
    //     for (let j = i; j >= 0; j--) {
    //         sum += nums[j]
    //         if (sum == k) {
    //             count++
    //         }
    //     }
    // }

    // 前缀和 + 哈希表优化
    // 算法思想：1、 设 pre[i] 为 [0,i] 个元素的总和
    //          2、 则针对[j,i]只需要求出 pre[i] - k 的值，并算出有多少个 j 满足
    //          3、 使用 map 结构来存储 前 i 个元素的和，及出现的次数
    
    let map = new Map()
    
    map.set(0,1)

    let sum = 0,count = 0
    for(let item of nums){
        sum += item

        if(map.has(sum - k)){
            count += map.get(sum - k)
        }

        if(map.has(sum)){
            map.set(sum,map.get(sum) + 1)
        }else{
            map.set(sum,1)
        }
    }
    

    return count
}

const count = subarraySum([1, 2, 2,3,4,3], 5)
console.log(count);