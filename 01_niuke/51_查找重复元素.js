function duplicates(arr) {

    // 方法一
    // arr = arr.sort()
    // // console.log(arr)
    // var new_arr = []
    // for(var i = 0;i < arr.length;i++){
    //     if((arr[i-1] != arr[i]) && (arr[i+1] == arr[i])){
    //         new_arr.push(arr[i])
    //     } 
    // }
    // return new_arr

    // 方法二: indexOf() 方法可返回数组中某个指定的元素位置; 
    //         lastIndexOf() 查找某个元素最后出现的位置
    var new_arr = []
    arr.forEach(element => {
      if((arr.indexOf(element) != arr.lastIndexOf(element)) && new_arr.indexOf(element) == -1){
        new_arr.push(element)
      }  
    })
    return new_arr
}


var arr = [1, 2, 4, 4, 3, 3, 1, 5, 3]

console.log(duplicates(arr));