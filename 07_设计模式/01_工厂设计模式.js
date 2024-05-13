// 围绕一个超级工厂创建其它工厂，该超级工厂又称为其它工厂的工厂

// 子类可以重写父类接口方法以便创建的时候指定自己的对象类型

// 创建苹果类
class Apple {
    constructor(name){
      this.name = 'apple'
    }
    getColor(){
      return 'Red'
    }
  }
  
  // 创建香蕉类
  class Banana {
    constructor(name){
      this.name = 'banana'
      this.count = 10
    }
    getCount(){
      return this.count--
    }
  }
  
  class Fruits {
    constructor(type){
      switch(type){
        case 'apple':
          return new Apple()
        case 'banana':
          return new Banana()
      }
    }
  }
  
  const apple = new Fruits('apple')
  const banana = new Fruits('banana')
  