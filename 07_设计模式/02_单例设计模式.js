// ① 使用闭包的方式

// const instance = (function(){

//     let instance = null

//     function User(name,age){
//         this.name = name
//         this.age = age
//     }

//     return function(name,age){
//         if(!instance){
//             instance = new User(name,age)
//         }
//         return instance
//     }
// })()

// console.log(instance('jay',20) === instance('jj',19));


// 单例模式，保证一个类仅有一个实例，并提供一个访问它的全局访问点，
//          解决全局使用的类 频繁创建和销毁，占用内存等问题

// ② 使用 ES6 类的方式创建单例模式
class SingItance{
    constructor(name,age){
       if(!SingItance.instance){
            this.name = name
            this.age = age

            SingItance.instance = this
       }
       return SingItance.instance
    }
}
