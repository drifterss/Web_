// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
// 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 
// 示例 1：

// 输入：[1,2,3,1]
// 输出：4
// 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 
var rob = function(nums) {

    dp = [] // 表示 下标 i (包含i),偷的最大钱币的金额

    if(nums.length === 1) return nums[0]
    if(nums.length === 2) return Math.max(nums[0],nums[1])

    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])

    result = 0

    for(let i = 2;i < nums.length;i++){

        dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])

        if(dp[i] > result){
            result = dp[i]
        }

    }

    return result

    // const len = nums.length
    // if(len === 1) return nums[0]
    // if(len === 2){
    //     return Math.max(nums[0],nums[1])
    // }
    // let dp = []
    // dp[0] = nums[0]
    // dp[1] = Math.max(nums[0],nums[1])
    // let result = 0
    // for(i = 2;i < len;i++){
    //     dp[i] = Math.max(dp[i-1],dp[i-2] + nums[i])
    //     result = (dp[i] > result) ? dp[i] : result
    //     // console.log(result);
    // }
    // return result
};

nums = [1,2,3,1,5]
res = rob(nums)
console.log(res);
