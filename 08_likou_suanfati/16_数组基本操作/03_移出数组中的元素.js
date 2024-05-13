// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
// 输入描述：
// [1, 2, 3, 4, 2], 2
// 输出描述：
// [1, 3, 4]

function remove(arr, item) {
    // var index = 0
    // while(index < arr.length){
    //     if(arr[index] === item){
    //         arr.splice(index,1)
    //     }else{
    //         index++
    //     }
    // }
    // console.log(arr);
    // return arr

    var newArr = []
    for(var i=0;i<arr.length;i++){
        if(arr[i] != item){
            newArr.push(arr[i])
        }
    }
    console.log(newArr);
    return newArr
}
remove([1, 2, 3, 4, 2], 2)