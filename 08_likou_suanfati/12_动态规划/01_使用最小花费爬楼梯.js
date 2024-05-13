// 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

// 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

// 请你计算并返回达到楼梯顶部的最低花费。

// 示例 1：

// 输入：cost = [10,15,20]
// 输出：15
// 解释：你将从下标为 1 的台阶开始。
// - 支付 15 ，向上爬两个台阶，到达楼梯顶部。
// 总花费为 15 。

var minCostClimbingStairs = function(cost) {

    dp = []   // dp[i] : 到达下标 i 位置所需要花费的最少体力

    dp[0] = 0
    dp[1] = 0

   

    for(let i = 2;i <= cost.length;i++){

        dp[i] = Math.min((dp[i-1] + cost[i-1]),(dp[i-2] + cost[i-2]))

        // console.log(dp[i]);
    }

   
    return dp[cost.length]
};

cost = [10,15,20]

res = minCostClimbingStairs(cost)

console.log(res);