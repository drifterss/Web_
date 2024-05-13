var name = 'jay'

function Person(name){
    this.name = name

    console.log(this.name)
}

var a = Person('Tom')      // 相当于执行了 person 函数，但该函数并没有返回值，此时 a 无值

console.log(name)

console.log(a)

var b = new Person('Mary')  // new 的时候新建了一个对象
console.log(b)


// Tom  jay undefined  Mary   Person { name: 'Mary' }