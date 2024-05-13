// 给定字符串 str，检查其是否包含 连续3个数字，请使用正则表达式实现。
// 1、如果包含，返回最先出现的 3 个数字的字符串
// 2、如果不包含，返回 false

function captureThreeNumbers(str) {
    if(str.match(/([0-9]){3}/g) == null){
        return false
    }else{
        return str.match(/([0-9]){3}/g)[0]
    }
}

console.log(captureThreeNumbers('98765432'))