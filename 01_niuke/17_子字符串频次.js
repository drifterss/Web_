const _searchStrIndexOf = (str, target) => {
    // 补全代码
    return str.split(target).length - 1
}

num = _searchStrIndexOf('abcdbce','bc')

console.log(num)