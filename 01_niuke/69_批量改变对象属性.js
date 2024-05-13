// 给定一个构造函数 constructor，请完成 alterObjects 方法，
// 将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量。

function alterObjects(constructor, greeting) {
    
    // 通过原型对象来添加
    constructor.prototype.greeting = greeting
    
    return constructor.prototype.greeting
}


var C = function(name){
    this.name = name 
    return this
} 
var obj1 = new C('Rebecca'); 


console.log(alterObjects(C, 'What\'s up'));