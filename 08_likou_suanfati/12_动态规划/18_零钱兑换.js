// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

// 你可以认为每种硬币的数量是无限的。

// 示例 1：

// 输入：coins = [1, 2, 5], amount = 11
// 输出：3 
// 解释：11 = 5 + 5 + 1
// 示例 2：

// 输入：coins = [2], amount = 3
// 输出：-1

var coinChange = function(coins, amount) {

    if(!amount){
        return 0
    }

    // 定义 dp 数组：dp[j] 表示构成 dp[j] 数值所需要的硬币的最小个数
    let dp = new Array(amount+1).fill(Infinity)

    // 初始化 dp 数组
    dp[0] = 0

    // 求组合数：先遍历物品，再遍历背包
    for(let i = 0;i < coins.length;i++){
        for(let j = coins[i];j <= amount;j++){
            dp[j] = Math.min(dp[j-coins[i]] + 1,dp[j])
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
}

const res = coinChange([1, 2, 5],11)
console.log(res);