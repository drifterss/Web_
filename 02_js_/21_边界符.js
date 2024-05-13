// 正则表达式里面不需要加引号
var reg = /abc/     // 测试的字符串里面只要含有 abc 就行

console.log(reg.test('abc'));   // true
console.log(reg.test('abcd'));  // true
console.log(reg.test('aabcdd'));   // true

console.log('----------------------');

// 边界符 ^ : 以什么什么开头
//       $ ： 以什么什么结尾

var reg1 = /^abc/       // 必须以 abc 开头的字母
console.log(reg1.test('abc'));   // true
console.log(reg1.test('abcd'));  // true
console.log(reg1.test('aabcdd'));   // false

console.log('----------------------');

var reg2 = /^abc$/      // 必须以 abc 开头并且以 abc 结尾的字母
console.log(reg2.test('abc'));   // true
console.log(reg2.test('abcd'));  // false
console.log(reg2.test('aabcdd'));   // false

console.log('----------------------');


// 字符类   [] 表示有一系列字符可供选择，只要匹配其中一个就可以了
var rg3 = /[abc]/   // 字符串里有 a、b、c 其中一个则为 true

console.log(rg3.test('apple'));   // true
console.log(rg3.test('blue'));    // true
console.log(rg3.test('color'));   // true
console.log(rg3.test('green'));   // false
console.log('----------------------');

var rg4 = /^[abc]$/   // 字符串必须为 a,b,c 单独字母才为 True

console.log(rg4.test('a'));   // true
console.log(rg4.test('b'));   // true
console.log(rg4.test('b'));   // true
console.log(rg4.test('A'));   // false
console.log('----------------------');

// 连接符：- 
var rg5 = /^[a-z]$/   // 26 个字母里面有任何一个字母都返回 true
console.log(rg5.test('a'));     // true
console.log(rg5.test('z'));     // true
console.log(rg5.test('A'));     // false
console.log(rg5.test('5'));     // false
console.log('----------------------');

// 字符组合 
var rg6 = /^[a-zA-Z0-9_-]$/   // 26 个字母(包含大小写),数字,_,-,里面有任何一个字母都返回 true
console.log(rg6.test('a'));     // true
console.log(rg6.test('z'));     // true
console.log(rg6.test('A'));     // true
console.log(rg6.test('5'));     // true
console.log(rg6.test('-'));     // true
console.log('----------------------');


// 中括号里面的 ^ 表示取反操作
var rg7 = /^[^a-zA-Z0-9_-]$/   // 26 个字母(包含大小写),数字,_,-,里面有任何一个字母都返回 false
console.log(rg6.test('a'));     // false
console.log(rg6.test('z'));     // false
console.log(rg6.test('A'));     // false
console.log(rg6.test('5'));     // false
console.log(rg6.test('-'));     // false