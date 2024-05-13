// 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。

// 每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

// 0 <= j <= nums[i] 
// i + j < n
// 返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。

// 示例 1:

// 输入: nums = [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置

// 贪心算法实现

var jump = function(nums) {
    if(nums.length == 1) return 0

    curDistance = 0  // 当前覆盖的范围
    ans = 0     // 跳跃的步数
    nextDistance = 0 // 下一步覆盖的范围

    for(let i = 0;i < nums.length;i++){
        nextDistance = Math.max(nums[i] + i,nextDistance)

        if(i == curDistance){
            ans++
            curDistance = nextDistance

            // 此时已经可以到达终点
            if(nextDistance >= nums.length - 1) break
        }
    }
    return ans++
};

nums = [2,3,1,1,4]

step = jump(nums)
console.log(step);