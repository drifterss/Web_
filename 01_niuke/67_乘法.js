// 求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题

function multiply(a, b) {
    
    var s1 = a.toString()
    var s2 = b.toString()

    // 获取小数点右边的位数
    var letA = s1.indexOf('.') === -1 ? 0: (s1.length - s1.indexOf('.') -1)
    console.log(letA); 
    var letB = s2.indexOf('.') === -1 ? 0: (s2.length - s2.indexOf('.') -1)
    console.log(letB);
    
    // toFixed(num): 计算结果保留的小数到 num 位 
    return (a * b).toFixed(Math.max(letA,letB))
    
}

console.log(multiply(3,0.0001));