function multiliy(a,b){

    // 先把两数转换为 字符串
    str1 = a.toString()
    str2 = b.toString()

    // console.log(str1.length);   // 3
    // console.log(str1.indexOf('.')); // 1

    // 获取两个数的小数位数
    let lenA = (str1.indexOf('.') == -1) ? 0 : (str1.length-str1.indexOf('.')-1)
    let lenB = (str2.indexOf('.') == -1) ? 0 : (str2.length-str1.indexOf('.')-1)

    // console.log(lenA);
    // console.log(lenB);

    // 比较两数的精度，精度最大的作为结果数精度
    len = Math.max(lenA,lenB)

    var result = parseFloat(a*b).toFixed(len)
    console.log(result);

    return result

}

multiliy(5,3)

// const s = new Set([1,2,3])
// s.add(1)
// console.log(s);  // 不会报错