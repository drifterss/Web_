// 请补全JavaScript函数，要求将第二个参数插入第一个参数数组的尾部，并且以数组的形式返回

function _push(array,value) {

    // let len = array.length
    // for(let i = 1;i < len;i++){
    //     // 数组所有的元素都后移一位
    //     array[i-1] = array[i-1]
    // }
    // array[len] = value
    // // console.log(array);
    // return array

    const temp = [...array,value]
    array.length = 0
    for(item of temp){
        array.push(item)
    }
    // console.log(array);
    return array
}
_push([1,2,3],5)
// let arr = [1,2,3]
// const res = _push([1,2,3],5)
// console.log(res);