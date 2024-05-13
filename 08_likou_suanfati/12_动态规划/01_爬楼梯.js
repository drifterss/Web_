// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 示例 1：

// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶

var climbStairs = function(n) {

    dp = []    // 爬到 第 i 层楼梯，有 dp[i] 种方法
    dp[1] = 1
    dp[2] = 2

    for(let i = 3;i <= n;i++){
        dp[i] = dp[i-2] + dp[i-1]
    }

    return dp[n]
};

res = climbStairs(2)
console.log(res);