function paddingNum(num){
    // 记录下是正数还是负数
    var flag = num > 0 ? true:false

    // 取绝对值并转换为字符串
    num = Math.abs(num).toString()

    // 把字符串根据小数点拆分左右部分
    let [num_left,num_right] = num.split('.')

    // 判断是否有小数位，没有就用空格代替
    num_right = num_right ? '.' + num_right : ''

    let temp = ''
    while(num_left.length > 3){
        temp = ',' + num_left.slice(-3) + temp

        num_left = num_left.slice(0,num_left.length - 3)
    }

    //  循环结束
    num = flag ? (num_left + temp + num_right) : '-' + (num_left + temp + num_right)
    return num
}

x = paddingNum(-123456.7)
console.log(x);     // -123,456.7