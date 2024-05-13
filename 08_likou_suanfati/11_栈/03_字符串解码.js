// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

// 示例 1：

// 输入：s = "3[a]2[bc]"
// 输出："aaabcbc"
// 示例 2：

// 输入：s = "3[a2[c]]"
// 输出："accaccacc"
// 示例 3：

// 输入：s = "2[abc]3[cd]ef"
// 输出："abcabccdcdcdef"

// 思想：1、外层的解码需要等待内层解码的结果，先扫描的字符还用不上，但不能忘
    //   2、入栈时机：① 当遇到 '[' ，已经扫描的数字就是“倍数”，入栈暂存
    //               ② 当遇到 '[',已经扫描的字母也入栈等待，括号里的解码完了，一起参与构建字符串
    //   3、出栈时机：遇到 ‘]’，内层的扫描完了，栈顶元素可以出栈了，共同参与字串的构建
    //               栈顶就是最近遇到的 “倍数” 和 字母

var decodeString = function(s) {
    let numStack = []   // 存倍数的栈
    let strStack = []   // 存 拼接的 str 的栈
    let num = 0         // 倍数的搬运工
    let result = ''     // 字符串的搬运工

    for(const char of s){
        // 遇到数字
        if(!isNaN(char)){
            num = num * 10 + Number(char) // 算出倍数
        }else if(char == '['){
            strStack.push(result)
            result = ''
            numStack.push(num)
            num = 0
        }else if(char == ']'){
            let repeatTimes = numStack.pop()
            result = strStack.pop() + result.repeat(repeatTimes)
        }else{
            result += char
        }
        
    }
    return result
}

const res = decodeString("3[a2[c]]")
console.log(res);