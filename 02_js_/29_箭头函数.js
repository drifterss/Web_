var obj = {
    age:20,
    say:() => {
        console.log(this.age);
    }
}

// 对象是不会产生作用域的，此时的 this 指向的是 window 对象
obj.say()   // undefined