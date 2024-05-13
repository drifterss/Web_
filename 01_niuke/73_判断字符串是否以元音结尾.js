function endsWithVowel(str) {

    // 以元音结尾加 $ ; 忽略大小写加上 i
    let regex = /[a,e,i,o,u]$/i

    return regex.test(str)
}