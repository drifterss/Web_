class Father {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    sum() {
        console.log(this.x + this.y);
    }
}

class Son extends Father {
    constructor(x, y) {
        super(this, x, y)       // 调用了父类的构造函数，实现继承
    }
}

var son = new Father(10, 20)

son.sum()

