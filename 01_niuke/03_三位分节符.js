// function formatNumber(num){
//     return num.toLocaleString();
// }
// console.log(formatNumber(1234567))
// console.log(typeof(formatNumber(1234567)))

function _comma(number) {
    let negative = ''

    // 判断参数是否为负数，如果为负数，则保留负号
    if (number < 0) {
        negative = '-'
        number = Math.abs(number)
    }

    // 将数字拆解为数组并进行反转
    let array = parseInt(number).toString().split("").reverse()

    console.log(array)

    let sign = 0
    let commaArray = []

    // 遍历数组，每三位添加一个 , 
    for (let i = 0; i < array.length; i++) {
        if (sign === 3) {
            commaArray.push(',')
            sign = 0
        }
        commaArray.push(array[i])
        sign++
    }
    return negative + commaArray.reverse().join('')
}


console.log(_comma(1234567))

// console.log(Number(null));

// f 是一个函数
// var f = function g() {
//     return 23;
// };
// console.log(f());
// console.log(typeof g);
// console.log(typeof g());    // error

// var i = 0;
// while( i < 40 ){
//     if( i < 30 )
//         continue;
//     console.log('########');
//     i++;
// }

// var x=10;

// function cals(myNum) {
//     return x+myNum;
// }
// console.log(cals(7));   // 17

// let jj = {
//     age:17,
//     niu:function(){
//         age = 18
//         console.log(this.age);
//     }
// }
// niu = jj.niu
// niu()   // 18
// jj.niu() // 17

// f = (x = x) => x;
// console.log(f(2));
// console.log(f());

// function fn(a, b) {

//     console.log(b);

// }
// console.log(fn(1)); undefined

// console.log(undefined + 1)  // NaN

// var arr = [];
// arr.length = 2;
// arr[0] = 1;
// console.log(arr[1])     // undefined

// function fun(){}
// console.log(fun());     // undefined

var test=new Boolean(NaN);
console.log(test);