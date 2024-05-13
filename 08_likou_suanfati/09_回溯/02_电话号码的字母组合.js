// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。


// 示例 1：

// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

const letterMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
// console.log(letterMap[2]);

var letterCombinations = function (digits) {
    s = []   // 存放叶子节点
    result = []  //存放所有的结果

    if(digits.length === 0) return []

    if(digits.length === 1) return letterMap[digits].split('')

    backtreeing(digits,0)

    function backtreeing(digits,index) {
        if (s.length === digits.length) {
            result.push(s.join(''))
            return
        }

        // 转换为 letterMap 对应的数组下标，index 表示 digits 数组的下标
        let dig = digits[index] - '0'

        const letterM = letterMap[dig]

        // 遍历字母对应的字符串
        for (let i = 0; i < letterM.length; i++) {
            s.push(letterM[i])
            
            backtreeing(digits,index+1)

            // 回溯
            s.pop()
        }
    }
    return result
};

arr = "2"
result = letterCombinations(arr)
console.log(result);