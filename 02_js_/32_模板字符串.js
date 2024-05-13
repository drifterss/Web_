// 1、可以解析变量
song = '幸存者'
output = `最爱的歌曲${song}`
console.log(output)         // 最爱的歌曲幸存者

// 2、可以换行
var obj = {
    name:'jj',
    sing:'黑夜问白天'
}

var html = `
    <div>
        <span>${obj.name}</span>
        <span>${obj.sing}</span>
    </div>
`
console.log(html);


// 3、可以调用函数
function fn(){
    return '背着梦的幸存者'
}
let text = `${fn()}，经历生活的拉扯！`
console.log(text);


console.log(String('foo')) // foo
console.log([] == 0);  // true

console.log(123 + null) // 123
console.log(123 + undefined) // NaN

console.log([] == 0)   // true  [] 会隐式转换为 0
console.log(![])    // false


// 报错
// (function() {
//     var x=foo();
//     var foo=function foo() {
//         return "foobar"
//     };
//     return x;
// })();