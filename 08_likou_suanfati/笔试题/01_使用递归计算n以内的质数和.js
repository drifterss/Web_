// 判断该数字是否为质数
function isPrime(num){
    if(num <= 1){
        return false
    }
    for(let i = 2;i <= Math.sqrt(num);i++){
        // 除 1 和本身外有其他因子，不是质数
        if(num % i === 0){
            return false     
        }
    }
    return true
}

function sumPrimes(n,current = 2){
    if(current > n){
        // 当前数字大于 n 时，结束递归，返回 0
        return 0
    }
    if(isPrime(current)){
        // 如果当前数字是质数，则相加之后继续递归
        return current + sumPrimes(n,current + 1)
    }else{
        // 如果当前数字不是质数，则直接进行下一次递归
        return sumPrimes(n,current + 1)
    }
}

const n = 2 // 更改这里的n来计算不同范围内的质数和
const primeSum = sumPrimes(n)
console.log(`小于等于${n}的质数的和为：${primeSum}`)