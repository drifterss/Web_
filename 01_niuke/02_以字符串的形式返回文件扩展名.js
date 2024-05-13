// str_ = '你们好啊,欢迎!'

// // 从前向后查找 "," 最后出现的位置
// i = str_.lastIndexOf(',')

// console.log(i)      // 4

// // 截取字符串
// str_1 = str_.substring(str_.lastIndexOf(','))   

// console.log(str_1)  // ,欢迎!


function getFilename(filename){
    i = filename.lastIndexOf('.')
                
    return filename.substring(i+1)
}

str_ = getFilename('.html')

console.log(str_)