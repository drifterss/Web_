// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 算法思想：
// 1、先定义一个左指针指向 -1，在依次递增
// 2、使用 set 结构保存递增时出现的字串(确保不重复)
// 3、如果重复，则删除该重复字符，并从该字符的下一个字符开始

var lengthOfLongestSubstring = function(s) {
    // 哈希集合，记录出现的不重复的字串
    let set = new Set()
    let n = s.length
    let ans = 0
    // 定义一个左指针
    let rk = -1
    for(let i = 0;i < n;i++){

        // 把集合中的前一个字符串删除，重新移动
        if(i !== 0){
            set.delete(s.charAt(i-1))
        }
        // 收集最长的字串
        while(rk + 1 < n && !set.has(s.charAt(rk + 1))){
            set.add(s.charAt(rk + 1))
            rk++
        }

        // 第 i 到 rk 是一个极长的字符串
        ans = Math.max(ans,rk - i + 1)
        console.log(set);
    }
    
    return ans 
}

const ans = lengthOfLongestSubstring("abcabcbb") 
console.log(ans);