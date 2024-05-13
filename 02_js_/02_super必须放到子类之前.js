class Father{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    sum(){
        console.log(this.x + this.y);
    }
}

class Son extends Father{
    constructor(x,y){
        super(x,y)      // 调用父类构造函数
        this.x = x
        this.y = y
    }

    substract(x,y){
        console.log(this.x - this.y);
    }
}

var son = new Son(10,20)
son.sum()
son.substract()