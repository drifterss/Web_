// 薯队长带着小红薯参加密室逃脱团建游戏，首先遇到了反转游戏，小红薯们根据游戏提示收集了多个单词线索，并将单词按要求加一个空格组 成了句子，最终要求把句子按单词反转解密。 
// 说明：收集的时候单词前后可能会有多个空格，反转后单词不能有多个空格，具体见输入输出样例。

// 输入例子：
// the	sky	is												blue!
// 输出例子：
// blue! is sky the

function reverse(s){
    // 匹配字符串中的非空白字符
    var str = s.match(/(\S+)/g)
    console.log(typeof(str));

    // // 调用数组的方法
    // var arr = str.split('')

    str.reverse()
    return str.join(" ")
}

console.log(reverse('the	sky	is												blue!'));