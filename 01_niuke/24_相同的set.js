// 要求以boolean的形式返回两个Set对象参数是否一样，是则返回true，否则返回false

const _isSameSet = (s1, s2) => {
    // 补全代码
    // 方法一：
    // array_1 = Array.from(s1)
    // array_2 = Array.from(s2)
    // if(array_1.length != array_2.length){
    //     return false
    // }

    // for(item of array_1){
    //     if(array_2.includes(item)){
    //         continue
    //     }else{
    //         return false
    //     }
    // }
    // return true

    // 方法二： every(): 对数组中每一项给定的函数，若都为 true，则返回 true
    if(s1.size !== s2.size){
        return false
    }
    let result = [...set1].every(item => s2.has(item))
    return result
}

const set1 = new Set(['a','b','c'])
const set2 = new Set(['a','c','b'])

console.log(_isSameSet(set1,set2));