// var reverseString = function(s) {
//     //Do not return anything, modify s in-place instead.
    
//     arr = s.split('')
//     console.log(arr);

//     len = arr.length

//     for(let i = 0,j = len - 1;i < len / 2;i++,j--){

//         let t = 0
//         t = arr[i]
//         arr[i] = arr[j]
//         arr[j] = t

//     }

//     return arr.join('')

// };



var reverseString = function(s) {
    //Do not return anything, modify s in-place instead.

    let i = 0
    let j = s.length - 1
    
    while(i < j){
        let t = ''
        t = s[i]
        s[i] = s[j]
        s[j] = t

        i++
        j--
    }
    // console.log(s)
    return s

}


s = 'helo'
res = reverseString(s)
console.log(res);