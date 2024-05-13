var person = {
    getName:function(){
        return this.name
    }
}

var man = {
    name:'张三'
}

// 1、往 person 的原型对象上添加 myCall 属性

Function.prototype.myCall = function(contex){

    // this 指的是 person.getName 这个函数，把它赋值为 context.man 这个对象中的 函数
    contex.fn = this

    res = contex.fn()

    return res
}



console.log(person.getName.myCall(man));

let a = Symbol("张三")
let b = Symbol("张三")
console.log(a == b);   // false

let c = Symbol.for("李四")
let d = Symbol.for("李四")
console.log(c == d);   // true