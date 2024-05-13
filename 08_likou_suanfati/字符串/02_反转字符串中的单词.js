// 给你一个字符串 s ，请你反转字符串中 单词 的顺序。

// 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。

// 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。

// 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

// 示例 1：

// 输入：s = "the sky is blue"
// 输出："blue is sky the"
// 示例 2：

// 输入：s = "  hello world  "
// 输出："world hello"
// 解释：反转后的字符串中不能存在前导空格和尾随空格。

// 反转从 start 到 end 的字符

// 翻转从 start 到 end 的字符
function reverse(strArr, start, end) {
    let left = start;
    let right = end;
  
    while(left < right) {
      // 交换
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
      left++;
      right--;
    }

    return strArr
}


var reverseWords = function(s) {
    const strArr = Array.from(s)

    // 先翻转整个字符串
    reverse(strArr,0,strArr.length - 1)

    // 再对字符串中的每个单词进行翻转
    for(let i = 0;i < strArr.length;i++){
        if(str[i] == ' ' || i == strArr.length){
            reverse(strArr,start,i - 1)
            start = i + 1 
        }
    }


    return strArr.join('')
};


s = "world"

res = reverse(s,0,s.length-1)
console.log(res);