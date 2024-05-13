// 给定输入字符串，按照单词对字符串逆序
// 示例 1：
// 输入: “the sky is blue”
// 输出: “blue is sky the”

var reverseWords = function (s) {

    // 先把字符串转换成数组
    var arr = s.split(" ")
    // console.log(arr);           // [ 'the', 'sky', 'is', 'blue' ]

    // 方法一
    // var new_arr = []
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     if (arr[i]) {
    //         new_arr.push(arr[i])
    //     }
    // }
    // return new_arr.join(' ')

    // 方法二
    reverse(arr,0,arr.length-1)
    // console.log(arr.join(' '));

    return new_arr.join(' ')



};

const reverse = function (arr, l, r, t) {
    while (l <= r) {
        t = arr[l]
        arr[l] = arr[r]
        arr[r] = t

        l++
        r--
    }
}

const str = "the sky is blue"
reverseWords(str)