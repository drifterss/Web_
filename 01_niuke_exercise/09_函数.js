// let num = function(){
//     // console.log('11');
//     return '11'
// }

// console.log(num)    // function()


// function Bulid(){
//     this.rules = true
// }
// let bulid = new Bulid()
// console.log(bulid.rules)  // true


// function Bulid(){
//     return false
// }
// let bulid = new Bulid()
// console.log(bulid.rules)  // 报错

const test = {
    rules:false
}
function Bulid(){
    return this.rules
}
let bulid = new Bulid()
console.log(bulid.rules)  // udnefined

// const test = {
//     rules:false
// }
// function Bulid(){
//     test = true
// }

// let bulid = new Bulid()

// console.log(bulid.rules)  // udnefined