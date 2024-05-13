// 量词符：就是用来设置某个模式出现的次数
// 简单理解：就是让下面这个 a 重复多少次

var reg = /^a$/

// * : 重复 0 次或多次
var reg2 = /^a*$/


// + : 可以出现一次或很多次
var reg3 = /^a+$/

// ？: 出现 0 次或 1次

// {3} : 只能出现三次

// {3,} ：出现大于等于三次

// {3,6} : 出现大于等于三次小于等于6次
var reg6 = /^a{3,5}$/
console.log(reg6.test('aaaaa'));    // true

console.log(reg6.test('a'));    // false


// 用户名验证
var reg_ = /^[a-zA-Z0-9_-]{6,16}$/  // 符合要求的模式字符在 6 到 16 之间
console.log(reg_.test('aaa'));

console.log(reg_.test('drifter'));


// \d 表示 1-9，\s 表示空格
