// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行

var generate = function(numRows) {
    // 初始动态规划数组
    const dp = new Array(numRows)

    // 遍历每一行
    for(let i = 0;i < numRows;i++){
        // 初始化当前行
        dp[i] = new Array(i+1)
        // 第一行的第一个元素和最后一个元素总是 1
        dp[i][0] = dp[i][i] = 1

        // 计算中间元素
        for(let j = 1;j < i;j++){
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
        }
    }
    // console.log(dp);
    return dp
}

res = generate(5)
console.log(res);