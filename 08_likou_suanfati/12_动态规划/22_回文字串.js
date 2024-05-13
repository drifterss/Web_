// 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。

// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

// 示例 1：

// 输入："abc"
// 输出：3
// 解释：三个回文子串: "a", "b", "c"
// 示例 2：

// 输入："aaa"
// 输出：6
// 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"

const countSubstrings = function(s){
    let result = 0
    // s = Array.from(s)
    // console.log(s);

    // dp[i][j] 表示字符串 s 从 i 到 j 是否为回文串
    const dp = new Array(s.length+1).fill(false)
    // let dp = Array.from(Array(s.length), () => Array(s.length).fill(false))

    for(let i = s.length - 1;i >= 0;i--){
        for(let j = i;j < s.length-1;j++){
            if(s[i] == s[j]){
                if(j - i <= 1){
                    result += 1
                    dp[i][j] = true
                }else if(dp[i+1][j-1]){
                    result++
                    dp[i][j] = true
                }
            }
        }
    }
    return result
}

const res = countSubstrings("abc")
console.log(res);