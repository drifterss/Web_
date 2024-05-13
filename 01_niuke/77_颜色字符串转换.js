// 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
// 1. rgb 中每个 , 后面的空格数量不固定
// 2. 十六进制表达式使用六位小写字母
// 3. 如果输入不符合 rgb 格式，返回原始输入

function rgb2hex(sRGB) {
    var reg = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/
    // return reg.test(sRGB)

    // 匹配查找字符串，返回符合正则表达式内容的部分，返回值是数组类型，没有找到则返回null
    var arr = sRGB.match(reg)
    console.log(arr);   //[
    //     'rgb(255, 255, 255)',
    //     '255',
    //     '255',
    //     '255',
    //     index: 0,
    //     input: 'rgb(255, 255, 255)',
    //     groups: undefined
    //   ]

    if(!arr){
        return sRGB
    }else{
        // console.log(arr[0]);
        // console.log(arr.length);
        var num1 = Number(arr[1]) < 16?'0'+ Number(arr[1]):Number(arr[1])
        var num2 = Number(arr[2]) < 16?'0'+ Number(arr[2]):Number(arr[2])
        var num3 = Number(arr[3]) < 16?'0'+ Number(arr[3]):Number(arr[3])
        return '#' + num1.toString(16) + num2.toString(16) + num3.toString(16)
    }


}

console.log(rgb2hex('rgb(255, 255, 255)'))