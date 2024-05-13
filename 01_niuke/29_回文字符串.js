// 要求以boolean的形式返回参数字符串是否为回文字符串
const _isPalindrome = string => {
    // 补全代码
    
    // 方法一：先转为数组再颠倒再转换为字符串判断是否相等
    // var new_str = string.split('').reverse().join('')
    // return (string === new_str) 

    // 方法二：
    if(string.length == 1){
        return true
    }
    var middle = Math.floor(string.length / 2)

    j = string.length - 1

    for(var i = 0;i < middle;i++){
        if(string.charAt(i) !== string.charAt(j)){
            return false
        }
        j--
    }
    return true
}

console.log(_isPalindrome('123321'));