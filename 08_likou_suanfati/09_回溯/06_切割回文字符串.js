// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

// 回文串 是正着读和反着读都一样的字符串。

// 示例 1：

// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]

var partition = function(s) {

    const result = []
    const path = []

    backtreeing(0)
    return result

    function backtreeing(startIndex){

        if(startIndex >= s.length){
            result.push(Array.from(path))
            return
        }

        for(let i = startIndex;i < s.length;i++){

            // 判断切割的字符串是否是回文字符串
            if(!isPalindrome(s,startIndex,i))  continue

            path.push(s.slice(startIndex,i+1))

            // 往下继续切割
            backtreeing(i+1)

            path.pop()

        }

    }
};

// 判断是否是回文字符串
const isPalindrome = (s, l, r) => {
    for (let i = l, j = r; i < j; i++, j--) {
        if(s[i] !== s[j]) return false;
    }
    return true;
}

s = "aab"
res = partition(s)

console.log(res);