// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
// 同时还满足 nums[i] + nums[j] + nums[k] == 0 。

// 请你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
// 注意，输出的顺序和三元组的顺序并不重要。

// 思路:
// 先排序,再循环遍历数组, i 为变量,left 设置为 i+1, right 设置为 nums.length - 1
// 如果 num[i] + nums[left] + nums[right] > target, 则 右指针 减一
// 如果 num[i] + nums[left] + nums[right] < target, 则 左指针 加一

// var threeSum = function(nums) {

//     nums.sort((a, b) => a - b)

//     let res = []
    

//     for(let i = 0;i < nums.length;i++){

//         let left = i + 1
//         let right = nums.length - 1

//         // 如果数组第一个元素大于0
//         if(nums[i] > 0) return

//         // 去重元素
//         if( i > 0 && nums[i] == nums[i-1]) continue
  
//         while(left < right){
//             let lNum = nums[left], rNum = nums[right], threeSum = nums[i] + lNum + rNum
//             // 三数之和小于0，则左指针向右移动
//             if (threeSum < 0) left++ 
//             else if (threeSum > 0) right--
//             else {
//                 res.push([nums[i], lNum, rNum])
//                 // 去重
//                 while(left < right && nums[left] == nums[left + 1]){
//                     right++
//                 }
//                 while(left < right && nums[right] == nums[right - 1]) {
//                     right--
//                 }
//                 left++
//                 right--
//             }
//         } 
//     }
//     console.log(res)
//     return res

//     // console.log(nums);

// }





var threeSum = function(nums) {
    const res = [], len = nums.length
    // 将数组排序
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len; i++) {
        let l = i + 1, r = len - 1, iNum = nums[i]
        // 数组排过序，如果第一个数大于0直接返回res
        if (iNum > 0) return res
        // 去重
        if (iNum == nums[i - 1]) continue
        while(l < r) {
            let lNum = nums[l], rNum = nums[r], threeSum = iNum + lNum + rNum
            // 三数之和小于0，则左指针向右移动
            if (threeSum < 0) l++ 
            else if (threeSum > 0) r--
            else {
                res.push([iNum, lNum, rNum])
                // console.log(res);
                // 去重
                while(l < r && nums[l] == nums[l + 1]){
                    l++
                }
                while(l < r && nums[r] == nums[r - 1]) {
                    r--
                }
                l++
                r--
            }
        }
    }
    // console.log(res);
    return res
};


const res = threeSum([-1,0,1,2,-1,-4])
console.log(res);