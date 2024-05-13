// 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

// 示例 1：

// 输入：n = 12
// 输出：3 
// 解释：12 = 4 + 4 + 4
// 示例 2：

// 输入：n = 13
// 输出：2
// 解释：13 = 4 + 9

var numSquares = function(n) {
    // 设置 dp 数组
    const dp = new Array(n+1).fill(Infinity)

    dp[0] = 0

    // 先遍历物品，再遍历背包
    for(let i = 1;i * i <= n;i++){
        for(let j = i * i;j <= n;j++){
            dp[j] = Math.min(dp[j - i*i]+1,dp[j])
        }
    }
    return dp[n]
}

const res = numSquares(13)
console.log(res);