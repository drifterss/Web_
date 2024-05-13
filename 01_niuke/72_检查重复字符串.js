function containsRepeatingLetter(str) {
    var arr = str.split('')
    // console.log(arr);
    // console.log(arr.indexOf('r'))
    // console.log(arr.lastIndexOf('r'));
    
    // forEach 也是一个函数，使用 return 只能跳出 forEach 函数 

    // 方法一
    // for(var i = 0;i < arr.length;i++){
    //     if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) {
    //         console.log('有重复')
    //         return true
    //     }
    // }
    // return false

    // 方法二
    let strArr = str.split("");
    let regex = /[a-z]/i;       // 判断是否为字符串
    for(let i = 0; i < strArr.length; i++) {
        if (strArr[i] === strArr[i+1] && regex.test(strArr[i])) {
            return true;
        }
    }
    return false;

}

console.log(containsRepeatingLetter('rr33e'));