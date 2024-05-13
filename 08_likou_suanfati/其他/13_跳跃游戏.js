// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 

// 示例 1：

// 输入：nums = [2,3,1,1,4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

var canJump = function(nums) {
    const dp = new Array(nums.length).fill([0])

    dp[0] = nums[0]

    for(let i = 1;i < nums.length;i++){

        // 递推公式，最大跳跃长度
        dp[i] = Math.max(nums[i],dp[i-1] - 1)

        // 如果前一步为 0，则无法继续跳跃
        if(dp[i-1] === 0) return false
        
    }
    return true
};


// nums = [2,3,1,1,4]  // true

nums = [3,2,1,0,4]

flag = canJump(nums)
console.log(flag);