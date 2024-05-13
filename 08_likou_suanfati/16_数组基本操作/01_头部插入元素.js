// 请补全JavaScript函数，要求将第二个参数插入第一个参数数组的头部，并且以数组的形式返回

function _unshift(array,value) {

    let len = array.length
    for(let i = len - 1;i >= 0;i--){
        // 数组所有的元素都后移一位
        array[i+1] = array[i]
    }
    array[0] = value
    // console.log(array);
    return array
}
// _unshift([1,2,3],5)
let arr = [1,2,3]
const res = _unshift([1,2,3],5)
console.log(res);