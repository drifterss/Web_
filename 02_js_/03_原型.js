// 利用构造函数来创建实例对象
function Star(uname, age) {
    this.uname = uname
    this.age = age
}

// 公有的属性一般存放在构造函数当中

// prototype(原型): 是一个对象
// 每一个构造函数都有一个单独的原型对象（实现共享），用来存放一些公有的方法
Star.prototype.sing = function(){
    console.log('在唱歌...');
}

var jay = new Star('jay',40)

var jj = new Star('jj',37)

// jj.sing()

// console.log(jay.sing == jj.sing); // True

console.log(Star);  // 每一个构造函数都有一个单独的原型对象(ptototype)

console.log(jj);   // 每一个对象都含有一个对象原型 __proto__ 执行构造函数的原型对象(prototype)

console.log(jj.__proto__ == Star.prototype);

// 方法查找规则：先查找 对象本身是否有 sing 方法；
            // 如果没有，因为对象原型 __proto__存在，再查找其构造函数的 prototype 上是否含有

