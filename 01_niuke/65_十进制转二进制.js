// 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。

function convertToBinary(num) {
    let str = num.toString(2)
    console.log(str);

    let x = (8 - str.length)

    for(var i = 0;i < x;i++){
        str = '0' + str
    }
    return str
}

console.log(convertToBinary(8));