// 用JavaScript实现把一个合数用质因数相乘的形式表示出来，并按要求格式输出。例如: 100=2*2*5*5
// 输入描述: 输入一个整数n
// 输出描述: 查找并输出整数n的质因数
// 输入样例: 100
// 输出样例: 100=2*2*5*5

//质数是指在大于1的自然数中，除了1和它本身以外不再有其他因数的自然数。
//定义函数名：isPrime（形参：n）
function isPrime(n) {//形参：需要的数据
    //循环：从2开始，到它本身的开根的数结束（提高效率）
    for (var i = 2; i <= Math.sqrt(n); i++) {
        //如果能够被除尽，说明它不是质数，返回false
        if (n % i === 0) {
            return false;
        }
    }
    //否则返回true
    return true;
}

//输入一个整数
var num = 100
/*从2到该整数1/2处，提高效率*/
for (let i = 2; i < num / 2; i++) {
    //判断该数是质数并且能够被除尽
    if (isPrime(i) && num % i === 0) {
        //输出 该数=第一个质因数
        console.log(num + "=" + i);
        //更新数据
        num = num / i;
        break;
    }
}
for (let i = 2; i < num / 2; i++) {
    if (isPrime(i) && num % i == 0) {
        //输出第二个因数之后的格式 *质因数
        console.log("*" + i);
        num = num / i;
        //为了保证重复的质因数能够输出，需要将i减少一位
        i--;
    }
}
//当num更新到最后一位时，需要在算式最后一位加上该数
console.log("*" + num);
