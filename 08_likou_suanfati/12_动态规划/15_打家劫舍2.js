// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
// 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

// 示例 1：

// 输入：nums = [2,3,2]
// 输出：3
// 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的



var rob = function(nums) {

    if(nums.length === 0) return 0
    if(nums.length === 1) return nums[0]

    // 不考虑首元素   从第 0 个位置开始 删除 1 个元素
    result_1 = rob_main(nums,1,nums.length-1)
    // console.log(result_1);


    // 不考虑尾元素
    result_2 = rob_main(nums,0,nums.length-2)

    return Math.max(result_1,result_2)

};

var rob_main = function(nums,start,end) {

   // 表示 下标 i (包含i),偷的最大钱币的金额
    const dp = Array(nums.length).fill(0)

    if(end === start) return nums[start]

    dp[start] = nums[start]
    dp[start+1] = Math.max(nums[start],nums[start+1])

    result = 0

    for(let i = start+2;i <= end;i++){

        dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])
    }
    return dp[end]
};

nums = [2,3,2]
res = rob(nums)
console.log(res);