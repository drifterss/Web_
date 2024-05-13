// 要求将字符串参数URL中的参数解析并以对象的形式返回

// 输入：getParams('https://nowcoder.com/online?id=1&salas=1000')
// 输出：{id:1, salas: 100}

const _getParams = (url) => {
    // 补全代码
    const str = url.substr(url.indexOf('?') + 1)

    arr_ = str.split('&')
    // console.log(arr_)       // [ 'id=1', 'salas=1000' ]
    result = {}
    for(let i = 0;i < arr_.length;i++){
        const item = arr_[i].split('=')
        // console.log(item);  [ 'id', '1' ]  ,  [ 'salas', '1000' ]
        result[item[0]] = parseInt(item[1])
    }
    return result
}

result = _getParams('https://nowcoder.com/online?id=1&salas=1000')

console.log(result)




