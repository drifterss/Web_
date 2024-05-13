// 问题描述: 反转字符串中元音
// 输入描述: 字符串
// 输出描述: 反转后字符串
// 输入样例: lenovo
// 输出样例: lonove

// 判断该字符串是否为元音字母
function isYuan(c){
    if(c == 'a' || c == 'e' || c == "i" || c == "o" || c == "u" ){
        return true
    }else{
        return false
    }
}

// 交换元素
function swap(arr,i,j){
    var k;
    k = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
}

// 反转字符串
function reverseString(s){
    
    // 把字符串转换为数组：String.prototype.split():用指定分隔符把字符串分割成一个数组
    arr = s.split('')
    console.log(arr);
    var i = 0;
    var j = arr.length - 1
    while(i < j){
        
        while(!isYuan(arr[i]) && i < j){
            i++
        }
        while(!isYuan(arr[j]) && i < j){
            j--
        }
        
        swap(arr,i,j)
        i++
        j--
        
    }
    console.log(arr);
    // 把数组转换成字符串
    str = arr.join('')
    return str.toString()
}

var s = reverseString('lenovo')

console.log(s);