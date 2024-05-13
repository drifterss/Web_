// 1. 给"Human"构造函数的原型对象(prototype)添加"getName"方法，返回当前实例"name"属性
// 2. 将"Chinese"构造函数继承于"Human"构造函数
// 3. 给"Chinese"构造函数的原型对象添加"getAge"方法，返回当前实例"age"属性

function Human(name) {
    this.name = name
    this.kingdom = 'animal'
    this.color = ['yellow', 'white', 'brown', 'black']
}

Human.prototype.getName = function(){
    return this.name
}

function Chinese(name,age) {
    Human.call(this,name)
    this.age = age
    this.color = 'yellow'
}

// 利用了对象的形式修改原型对象
Chinese.prototype = new Human()     // 此时会修改 this 的指向，需手动通过构造函数指回原来的构造函数
Chinese.prototype.constructor = Chinese

Chinese.prototype.getAge = function() {
    return this.age
}

