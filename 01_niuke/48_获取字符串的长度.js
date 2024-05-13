// 如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
// 否则如果字符 Unicode 编码 > 255 则长度为 2

function strLength(s, bUnicode255For1) {
    var length = s.length
    if(!bUnicode255For1){
        for(var i in s){
            // 获取字符的 Unicode 编码
            if(s.charCodeAt(i) > 255){
                length++
            }
        }
    }
    return length
}

console.log(strLength('hello world, 牛客', false));