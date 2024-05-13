// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

// 示例 1:

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

var findAnagrams = function(s, p) {
    const sLen = s.length, pLen = p.length

    if(sLen < pLen){
        return []
    }

    const ans = []
    const sCount = new Array(26).fill(0)
    const pCount = new Array(26).fill(0)

    for(let i = 0;i < pLen;i++){
        sCount[s[i].charCodeAt() - 'a'.charCodeAt()]++
        pCount[p[i].charCodeAt() - 'a'.charCodeAt()]++
    }

    if(sCount.toString() === pCount.toString()){
        ans.push(0)
    }

    for(let i = 0;i < sLen - pLen;i++){
        // 减去上一次位置的值
        sCount[s[i].charCodeAt() - 'a'.charCodeAt()]--
        // 变化下一次 pLen 长度的值
        sCount[s[i + pLen].charCodeAt() - 'a'.charCodeAt()]++
    
        if(sCount.toString() === pCount.toString()){
            ans.push(i+1)
        }
    
    }

    return ans
}

const ans = findAnagrams("cbaebabacd","abc")

console.log(ans);