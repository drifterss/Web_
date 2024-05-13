// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

// 示例 1： 输入：s = "We are happy."
// 输出："We%20are%20happy."

var pathEncryption = function(path) {
    return path.split(' ').join('%20')
};

s = "We are happy"

res = pathEncryption(s)
console.log(res);