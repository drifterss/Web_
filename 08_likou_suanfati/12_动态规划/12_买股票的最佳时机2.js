// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

// 返回 你能获得的 最大 利润 。

 

// 示例 1：

// 输入：prices = [7,1,5,3,6,4]
// 输出：7
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
//      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
//      总利润为 4 + 3 = 7 

var maxProfit = function (prices) {

    const len = prices.length;
    // 创建dp数组
    const dp = new Array(len).fill([0, 0]);

    // console.log(dp);
    // console.log(dp[1][1]);

    // dp数组初始化
    dp[0][0] = -prices[0];
    dp[0][1] = 0


    for (let i = 1; i < len; i++) {
        // 更新dp[i]
        // dp[i] = [
        //     Math.max(dp[i - 1][0], dp[i-1][1]-prices[i]),
        //     Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
        // ];
        dp[i][0] = Math.max(dp[i - 1][0], dp[i-1][1]-prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])
    }

    console.log(dp[len - 1][1]);
    return dp[len - 1][1];

    


};
arr = [7, 1, 5, 3, 6, 4]
maxProfit(arr)