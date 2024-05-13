function commonStr(strArr){

    let prex = strArr[0]

    for(let i = 1;i < strArr.length;i++){
        prex = find(prex,strArr[i])
    }
    // console.log(prex);
    return prex

}


// 定义查找函数, 先定义 查找两个字符串的 最长公共前缀
function find(str1,str2){
    let length = Math.min(str1.length,str2.length)

    let index = 0
    while(index < length && str1[index] == str2[index]){
        index += 1
    }
    console.log(str1.slice(0,index));
    str1 = str1.slice(0,index)

    // str = strArr.toString()

    // console.log(str);

    return str1
}

// find('flower','fly')

strArr = ['flower','flour','floor']

prex = commonStr(strArr)

console.log(prex);