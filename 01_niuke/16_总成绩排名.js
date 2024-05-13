// 要求将数组参数中的对象以总成绩(包括属性"chinese"、"math"、"english")从高到低进行排序并返回。

// 相当于 逆序排序
const _rank = array => {
    // 补全代码
    array.sort(function(a,b){
        let_r = a.chinese + a.math + a.english
        let_g = b.chinese + b.math + b.english

        return let_r - let_g
    })

    return array
}