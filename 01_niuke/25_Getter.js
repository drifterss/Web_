// 完成名为"Rectangle"的矩形类。要求如下：
// 1. 构造函数只包含两个参数，依次为"height"、"width"
// 2. 设置Getter，当获取该对象的"area"属性时，返回该对象"height"与"width"属性的乘积

class Rectangle {
    // 补全代码
    constructor(height,width){
        this.height = height
        this.width = width
    }
    get area(){
        return this.height * this.width
    }
}

console.log(new Rectangle(12,12).area)