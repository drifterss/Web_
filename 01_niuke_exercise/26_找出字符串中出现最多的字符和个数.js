function numString(str){
    let obj = {}

    let max = 0
    let maxIt = ''

    for(let i = 0;i < str.length;i++){
        char = str.charAt(i)
        if(obj[char]){
            obj[char]++
        }else{
            obj[char] = 1
        }
    }

    for (key in obj){
        if(obj[key] > max){
            max = obj[key]
            maxIt = key
        }
    }

    // console.log('最多的字符串是' + maxIt + ',个数为' + max);
    console.log(maxIt + ' ' + max);

    // return obj
}

numString('success')

// console.log(obj);